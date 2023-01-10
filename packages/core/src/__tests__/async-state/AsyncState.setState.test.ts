import { AsyncState, Status } from "../..";
import { timeout } from "./test-utils";
import { mockDateNow, TESTS_TS } from "../utils/setup";
import {StateBuilder} from "../../utils";

// @ts-ignore
jest.useFakeTimers("modern");
mockDateNow();

describe('AsyncState - setState', () => {
  // given
  let key = "simulated";
  let producer = timeout(100, [{id: 1, description: "value"}]);
  let myConfig = {initialValue: null};
  let myAsyncState = new AsyncState(key, producer, myConfig);
  let subscription = jest.fn();
  myAsyncState.subscribe({cb: subscription});

  beforeEach(() => {
    subscription.mockClear();
  });

  it('should synchronously mutate the state after setState call and notify subscribers', () => {
    // when
    myAsyncState.replaceState(StateBuilder.pending({}));
    // then
    let expectedState = {
      props: {},
      data: null,
      timestamp: TESTS_TS,
      status: Status.pending,
    };
    expect(myAsyncState.state).toEqual(expectedState);

    expect(subscription).toHaveBeenCalledTimes(1);
    expect(subscription).toHaveBeenCalledWith(expectedState);
  });
  it('should update state and do not notify subscribers', async () => {
    let lastSuccess = myAsyncState.lastSuccess;

    myAsyncState.replaceState(StateBuilder.success({}, null), false);
    // then
    expect(subscription).not.toHaveBeenCalled();
  });
});
