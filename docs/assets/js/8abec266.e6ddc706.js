"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[866],{214:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(8427),r=n(4397),i=(n(2784),n(876)),o=["components"],s={sidebar_position:2,sidebar_label:"How the library works ?"},l="How the library works ?",c={unversionedId:"faq/how-the-library-works",id:"faq/how-the-library-works",title:"How the library works ?",description:"How this section works ?",source:"@site/docs/faq/how-the-library-works.md",sourceDirName:"faq",slug:"/faq/how-the-library-works",permalink:"/react-async-states/docs/faq/how-the-library-works",draft:!1,editUrl:"https://github.com/incepter/react-async-states/edit/main/packages/docs/docs/faq/how-the-library-works.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"How the library works ?"},sidebar:"tutorialSidebar",previous:{title:"Cancellations",permalink:"/react-async-states/docs/faq/cancellations"}},u={},p=[{value:"How this section works ?",id:"how-this-section-works-",level:2},{value:"How <code>AsyncState</code> works ?",id:"how-asyncstate-works-",level:2},{value:"How <code>setState</code> works ?",id:"how-setstate-works-",level:3},{value:"How <code>run</code> works ?",id:"how-run-works-",level:3},{value:"How <code>replaceState</code> works ?",id:"how-replacestate-works-",level:3},{value:"How <code>dispose</code> works ?",id:"how-dispose-works-",level:3},{value:"How <code>Source</code> works ?",id:"how-source-works-",level:2},{value:"How <code>AsyncStateProvider</code> works ?",id:"how-asyncstateprovider-works-",level:2},{value:"How <code>useAsyncState</code> works ?",id:"how-useasyncstate-works-",level:2},{value:"How <code>useAsyncState</code> subscription config works ?",id:"how-useasyncstate-subscription-config-works-",level:3},{value:"How <code>useAsyncState</code> subscription mode works ?",id:"how-useasyncstate-subscription-mode-works-",level:3},{value:"How <code>useAsyncState</code> subscription to <code>AsyncState</code> works ?",id:"how-useasyncstate-subscription-to-asyncstate-works-",level:3},{value:"Until we meet again",id:"until-we-meet-again",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-the-library-works-"},"How the library works ?"),(0,i.kt)("h2",{id:"how-this-section-works-"},"How this section works ?"),(0,i.kt)("p",null,"This section should be relevant only if you wish to contribute to the library,\nor you are looking for inspiration, or may be a curious guys that wants to know\nthe under the hood of things."),(0,i.kt)("p",null,"It will describe how the core and main features of the library are working."),(0,i.kt)("h2",{id:"how-asyncstate-works-"},"How ",(0,i.kt)("inlineCode",{parentName:"h2"},"AsyncState")," works ?"),(0,i.kt)("p",null,"The library, like so many others, uses the publisher/subscriber design pattern\nnaively without any intelligence (for now): It stores the state in an object\ncreated by a constructor called ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncState"),", when the state updates,\nthe subscribed components schedule a rerender (if it is not a component, the\nsubscriber gets notified)."),(0,i.kt)("p",null,"Here is the whole ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncStateInterface")," definition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface AsyncStateInterface<T> {\n  // new (key: AsyncStateKey, producer: Producer<T>, config: ProducerConfig<T>) : {},\n  // properties\n  key: AsyncStateKey,\n  uniqueId: number | undefined,\n  _source: AsyncStateSource<T>,\n\n  currentState: State<T>,\n  lastSuccess: State<T>,\n\n  cache: { [id: AsyncStateKey]: CachedState<T> }\n  invalidateCache: (cacheKey?:\n    string) => void,\n\n  payload: { [id: string]: any } | null,\n  config: ProducerConfig<T>,\n\n  subscriptions: { [id: number]: StateSubscription<T> },\n\n  suspender: Promise<T> | undefined,\n  producer: ProducerFunction<T>,\n  producerType: ProducerType,\n  readonly originalProducer: Producer<T> | undefined,\n\n// prototype functions\n  dispose: () => boolean, abort: (reason: any) => void,\n  replaceState: StateUpdater<T>,\n  setState: (newState: State<T>, notify?: boolean) => void,\n  run: (extraPropsCreator: RunExtraPropsCreator<T>, ...args: any[]) => AbortFn,\n  fork: (forkConfig?: ForkConfig) => AsyncStateInterface<T>,\n  subscribe: (cb: Function, subscriptionKey?: AsyncStateKey) => AbortFn,\n}\n\n")),(0,i.kt)("p",null,"When constructed, the async state performs the following actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Initialize its properties"),(0,i.kt)("li",{parentName:"ul"},"Wraps the given producer function with the library's logic"),(0,i.kt)("li",{parentName:"ul"},"Loads cache (is asynchronous, ",(0,i.kt)("inlineCode",{parentName:"li"},".then"),")")),(0,i.kt)("h3",{id:"how-setstate-works-"},"How ",(0,i.kt)("inlineCode",{parentName:"h3"},"setState")," works ?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"setState")," is the only part where we ",(0,i.kt)("inlineCode",{parentName:"p"},"change")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncState.currentState"),"\nproperty and notify subscribers."),(0,i.kt)("p",null,"It also does the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If it is a success:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"update ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncState.lastSuccess")," property"),(0,i.kt)("li",{parentName:"ul"},"if cache is enabled",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"calculate the hash from args and payload the props and save it"),(0,i.kt)("li",{parentName:"ul"},"if ",(0,i.kt)("inlineCode",{parentName:"li"},"persiste")," is provided, it is called with the whole cache."))),(0,i.kt)("li",{parentName:"ul"},"if status isn't ",(0,i.kt)("inlineCode",{parentName:"li"},"pending"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"empty the ",(0,i.kt)("inlineCode",{parentName:"li"},"suspender")," property (the pending promise)")))))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"setState")," always notifies subscribes, which are react components. the logic\nabout scheduling any updates is left to react for the moment (and I do believe\nit should stay like that.)"),(0,i.kt)("h3",{id:"how-run-works-"},"How ",(0,i.kt)("inlineCode",{parentName:"h3"},"run")," works ?"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," function declares some closure variables that it will be using,\ndeclares the props object and add running from producer capabilities, the emit\nfunction, the array of scheduled abort callbacks and declares also the abort\nfunction and binds it to the instance as ",(0,i.kt)("inlineCode",{parentName:"p"},"currentAborter"),"."),(0,i.kt)("p",null,"Then it calls your producer, and returns the abort callback. The abort callback\ngets invalidated once the producer resolves."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function runImmediately(\n  extraPropsCreator: RunExtraPropsCreator<T>,\n...execArgs: any[]\n): AbortFn\n{\n  if (this.currentState.status === AsyncStateStatus.pending) {\n    this.abort();\n    this.currentAborter = undefined;\n  } else if (isFn(this.currentAborter)) {\n    this.abort();\n  }\n\n  let onAbortCallbacks: AbortFn[] = [];\n\n  if (this.isCacheEnabled()) {\n    // (...) cache logic\n  }\n\n  const props: ProducerProps<T> = {\n    emit,\n    abort,\n    args: execArgs,\n    lastSuccess: that.lastSuccess,\n    payload: shallowClone(that.payload),\n    onAbort(cb: AbortFn) {\n      if (isFn(cb)) {\n        onAbortCallbacks.push(cb);\n      }\n    },\n    isAborted() {\n      return indicators.aborted;\n    }\n  };\n  Object.assign(props, extraPropsCreator(props));\n\n  function emit(\n    updater: T | StateFunctionUpdater<T>,\n    status?: AsyncStateStatus\n  ): void {\n    // (...) warning and quit execution\n    that.replaceState(updater, status);\n  }\n\n  function abort(reason: any): AbortFn | undefined {\n    // (...) abort logic\n    onAbortCallbacks.forEach(function clean(func) {\n      invokeIfPresent(func, reason);\n    });\n    that.currentAborter = undefined;\n  }\n\n  this.currentAborter = abort;\n  this.producer(props);\n  return abort;\n}\n")),(0,i.kt)("p",null,"Before doing any of that, the run checks on the config, whether it should apply\nsome effects, like ",(0,i.kt)("inlineCode",{parentName:"p"},"debounce")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"throttle"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const effectDurationMs = numberOrZero(this.config.runEffectDurationMs);\n\nif (!areRunEffectsSupported() || !this.config.runEffect || effectDurationMs === 0) {\n  return this.runImmediately(extraPropsCreator, ...args);\n} else {\n  return this.runWithEffect(extraPropsCreator, ...args);\n}\n")),(0,i.kt)("p",null,"The library when running with cache enabled, if it finds the hashed value it\njust sets it as state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"if (this.isCacheEnabled()) {\n  const runHash = hash(execArgs, this.payload, this.config.cacheConfig);\n  const cachedState = this.cache[runHash];\n\n  if (cachedState) {\n    if (didNotExpire(cachedState)) {\n      if (cachedState.state !== this.currentState) {\n        this.setState(cachedState.state);\n      }\n      return;\n    } else {\n      delete this.cache[runHash];\n    }\n  }\n}\n")),(0,i.kt)("p",null,"The function that wraps your producer function supports thenables and async\nawait and promises and generators, and even a falsy value, which falls back\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"replaceState")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'export function wrapProducerFunction<T>(asyncState: AsyncState<T>): ProducerFunction<T> {\n  return function producerFuncImpl(props: ProducerProps<T>, indicators: RunIndicators): undefined {\n    if (typeof asyncState.originalProducer !== "function") {\n      replaceState(props.args[0]);\n      return;\n    }\n    try {\n      executionValue = asyncState.originalProducer(props);\n    } catch (e) {\n      // (...)\n    }\n\n    if (isGenerator(executionValue)) {\n      // complicated logic that deserves a page of its own\n    } else if (isPromise(executionValue)) {\n      setState(StateBuilder.pending(savedProps))\n    } else {\n      setState(StateBuilder.success(executionValue, savedProps))\n      return\n    }\n\n    runningPromise\n      .then(stateData => {\n        let aborted = indicators.aborted;\n        if (!aborted) {\n          indicators.fulfilled = true;\n          setState(StateBuilder.success(stateData, savedProps));\n        }\n      })\n      .catch(stateError => {\n        let aborted = indicators.aborted;\n        if (!aborted) {\n          indicators.fulfilled = true;\n          setState(StateBuilder.error(stateError, savedProps));\n        }\n      });\n  }\n}\n')),(0,i.kt)("p",null,"Beside all of that, the ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," function performs an interesting thing:\nIt adds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," some properties while referencing the ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," itself.\nThis allows the library's ",(0,i.kt)("inlineCode",{parentName:"p"},"props.run")," to inherit the context behavior:\nWhen doing ",(0,i.kt)("inlineCode",{parentName:"p"},"props.run"),", it needs to run a producer, and provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," object\nwhich may ",(0,i.kt)("inlineCode",{parentName:"p"},"select")," from a provider, this power should be cascaded on runs."),(0,i.kt)("p",null,"That's why ",(0,i.kt)("inlineCode",{parentName:"p"},"RunExtraProps")," exists:\nIt allows the library to cascade the props:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you run a producer from provider, all cascading calls via ",(0,i.kt)("inlineCode",{parentName:"li"},"props.run"),"\nand ",(0,i.kt)("inlineCode",{parentName:"li"},"props.runp")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"props.select")," are context aware and may support\nusing just a ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," to interact with the library."),(0,i.kt)("li",{parentName:"ul"},"If you run from outside the provider, that power vanishes and you are only\nable to run producers unaware of the context, but you may use plain functions\nas producers and use the ",(0,i.kt)("inlineCode",{parentName:"li"},"Source")," object.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"\nexport function createRunExtraPropsCreator(manager: AsyncStateManagerInterface) {\n  return function closeOverProps<T>(props: ProducerProps<T>): RunExtraProps {\n    return {\n      run: createRunFunction(manager, props),\n      runp: createRunPFunction(manager, props),\n      select: createSelectFunction(manager),\n    };\n  }\n}\n\nexport function standaloneRunExtraPropsCreator<T>(props: ProducerProps<T>): RunExtraProps {\n  return {\n    run: createRunFunction(null, props),\n    runp: createRunPFunction(null, props),\n    select: createSelectFunction(null),\n  };\n}\n\n")),(0,i.kt)("h3",{id:"how-replacestate-works-"},"How ",(0,i.kt)("inlineCode",{parentName:"h3"},"replaceState")," works ?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"replaceState")," replaces the state imperatively with a state updater function\n(or value) and the desired status. It aborts any pending runs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function replaceState(\n  newValue: T | StateFunctionUpdater<T>,\n  status = AsyncStateStatus.success\n): void {\n  if (!StateBuilder[status]) {\n    throw new Error(`Couldn't replace state to unknown status ${status}.`);\n  }\n  if (this.currentState.status === AsyncStateStatus.pending) {\n    this.abort();\n    this.currentAborter = undefined;\n  }\n\n  let effectiveValue = newValue;\n  if (isFn(newValue)) {\n    effectiveValue = (newValue as StateFunctionUpdater<T>)(this.currentState);\n  }\n\n  const savedProps = cloneProducerProps({\n    args: [effectiveValue],\n    lastSuccess: this.lastSuccess,\n    payload: shallowClone(this.payload),\n  });\n  this.setState(StateBuilder[status](effectiveValue, savedProps));\n}\n")),(0,i.kt)("h3",{id:"how-dispose-works-"},"How ",(0,i.kt)("inlineCode",{parentName:"h3"},"dispose")," works ?"),(0,i.kt)("p",null,"Each subscribing component disposes of the async state when it no longer uses\nit, when it reaches zero subscribers, the async state returns to its initial\nstate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'function dispose() {\n  if (this.locks > 0) {\n    return false;\n  }\n\n  this.abort();\n  clearSubscribers(this as AsyncStateInterface<T>);\n\n  this.locks = 0;\n  this.setState(StateBuilder.initial(\n    typeof this.config.initialValue === "function" ? this.config.initialValue() : this.config.initialValue\n  ));\n\n  return true;\n}\n\n')),(0,i.kt)("h2",{id:"how-source-works-"},"How ",(0,i.kt)("inlineCode",{parentName:"h2"},"Source")," works ?"),(0,i.kt)("p",null,"The source object is constructed from the ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncState"),"'s instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// AsyncState constructor\nthis._source = makeSource(this);\n")),(0,i.kt)("p",null,"It is a javascript object having a key and uniqueId, and a hidden property that\nholds a reference to the async state instance itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"\nfunction constructAsyncStateSource<T>(\n  asyncState: AsyncStateInterface<T>\n): AsyncStateSource<T> {\n  return objectWithHiddenProperty(asyncStatesKey, asyncState);\n}\n\n")),(0,i.kt)("p",null,"That property is pretty well hidden using a constructor created in a closure\nusing a weak map vault with a private key static object."),(0,i.kt)("p",null,"The library knows how to read that source object and how to subscribe to it.\nIt adds a non-enumerable ",(0,i.kt)("inlineCode",{parentName:"p"},"Symbol")," to detect fastly that it is a Source object.\nBut later, it tries to read the value and may throw if it is not a valid source."),(0,i.kt)("p",null,"May be in the future, this source object is very compatible\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"useSyncExternalStore"),"\nand we could add new hooks supporting this shortcut."),(0,i.kt)("p",null,"When used with ",(0,i.kt)("inlineCode",{parentName:"p"},"useAsyncState"),", it no longer cares whether its inside provider\nor not, it just subscribes to the async state instance."),(0,i.kt)("h2",{id:"how-asyncstateprovider-works-"},"How ",(0,i.kt)("inlineCode",{parentName:"h2"},"AsyncStateProvider")," works ?"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncStatProvider"),"'s goal is to allow subscription via ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," keys and\nallows waiting for an ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncState")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"hoisting")," at runtime."),(0,i.kt)("p",null,"The provider adds a tremendous power to the library.\nIt creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"Manager")," which is similar to an instance from the ",(0,i.kt)("inlineCode",{parentName:"p"},"initialStates"),"\nprovided."),(0,i.kt)("p",null,"The manager is what it does all the context's work."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function makeContextValue(): AsyncStateContextValue {\n    return {\n      manager,\n      payload: shallowClone(payload),\n\n      get: manager.get,\n      run: manager.run,\n      fork: manager.fork,\n      hoist: manager.hoist,\n      watch: manager.watch,\n      select: manager.select,\n      dispose: manager.dispose,\n      watchAll: manager.watchAll,\n      getAllKeys: manager.getAllKeys,\n      runAsyncState: manager.runAsyncState,\n      notifyWatchers: manager.notifyWatchers,\n      runExtraPropsCreator: manager.runExtraPropsCreator,\n    };\n  }\n")),(0,i.kt)("p",null,"The manager's instance and methods are stable and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("strong",{parentName:"strong"},"NEVER"))," change, only\nthe payload that may change, and it only depends on the developer."),(0,i.kt)("p",null,"If contributing, you shouldn't care about putting the manager's methods in\nas dependencies, because they are stable and fix."),(0,i.kt)("p",null,"As you may notice, the power of the provider is in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Manager"),"."),(0,i.kt)("p",null,"It holds the wired async states and manages their change, it holds two types\nof watchers, watchers that watch over an exact async state, and watchers that\nwatch anything happening to the async states (hoisting and removal)."),(0,i.kt)("p",null,"The watchAll method is used by ",(0,i.kt)("inlineCode",{parentName:"p"},"useSelector")," when its argument is a\nfunction, that function may want to select from any possible async state\nthat passes through the provider, so it needs to be notified when something\nis added (",(0,i.kt)("inlineCode",{parentName:"p"},"hoisted"),"), that's why ",(0,i.kt)("inlineCode",{parentName:"p"},"watchAll")," exists in a nutshell.\nIt simply uses a special symbol as a record to save watchers into it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const asyncStateEntries: AsyncStateEntries = Object\n    .values(initializer ?? EMPTY_OBJECT)\n    .reduce(\n      createInitialAsyncStatesReducer,\n      Object.create(null)\n    ) as AsyncStateEntries;\n\n  // stores all listeners/watchers about an async state\n  let watchers: ManagerWatchers = Object.create(null);\n\n  const output: AsyncStateManagerInterface = {\n    entries: asyncStateEntries,\n    run,\n    get,\n    fork,\n    hoist,\n    watch,\n    select,\n    dispose,\n    watchers,\n    watchAll,\n    getAllKeys,\n    runAsyncState,\n    notifyWatchers,\n    setInitialStates\n  };\n  output.runExtraPropsCreator = createRunExtraPropsCreator(output);\n\n  return output;\n")),(0,i.kt)("p",null,"When notifying for updates, the provider closes over the current watchers and\ndelays using ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise.resolve()")," and invokes the gathered callbacks. Each callback\nof course checks whether it is still relevant or has been cleared."),(0,i.kt)("p",null,"And also, the notification is scheduled mainly when rendering. If you choose\nto hoist a state to the provider, then watchers and allWatchers should be notified,\nif it occurs in a sync way it would break the react's mental model. So we wait\nuntil react unlocks to give us control, and then we schedule updates."),(0,i.kt)("h2",{id:"how-useasyncstate-works-"},"How ",(0,i.kt)("inlineCode",{parentName:"h2"},"useAsyncState")," works ?"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," part of its name doesn't represent its true nature, and it exists\njust because the main goal is to subscribe to the ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncState")," instacne.\nIf I were to rename it anew, I would rather choose ",(0,i.kt)("inlineCode",{parentName:"p"},"useSharedState")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"useBetterState"),".  "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useAsyncState")," is by no doubts an interesting hook, in fact, that's what it does:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Declare a state guard to force updates"),(0,i.kt)("li",{parentName:"ul"},"Determines whether it is in provider (this grant the props run extra props)"),(0,i.kt)("li",{parentName:"ul"},"Parses the user configuration and get a subscription info at each dependencies change",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"parse the first argument and infer a full configuration object supported by\nthe library."),(0,i.kt)("li",{parentName:"ul"},"infer the subscription mode from the configuration with help of the context value"),(0,i.kt)("li",{parentName:"ul"},"give an automatic key is omitted"),(0,i.kt)("li",{parentName:"ul"},"checks whether it should recalculate the ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncState")," instance based on the\nnew configuration, the new mode, the state guard and the whole old\nsubscription info that's kept in a ",(0,i.kt)("inlineCode",{parentName:"li"},"useMemo"),"'s value",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"recalculate the async state instance if needed or take the one on the\nold subscription info."))),(0,i.kt)("li",{parentName:"ul"},"construct the subscription info with the guard, mode, dependencies,\nasyncState and the calculated run and dispose functions."),(0,i.kt)("li",{parentName:"ul"},"merges the payload from the user configuration and the one in context,\nif applied."))),(0,i.kt)("li",{parentName:"ul"},"If rendering with a different async state, reselect state value\nand reschedule an update."),(0,i.kt)("li",{parentName:"ul"},"Saves the subscription info in the old subscription info."),(0,i.kt)("li",{parentName:"ul"},"Adds ",(0,i.kt)("inlineCode",{parentName:"li"},"subscribe")," effect with ",(0,i.kt)("inlineCode",{parentName:"li"},"[asyncState, selector, areEqual]")," dependencies"),(0,i.kt)("li",{parentName:"ul"},"Adds ",(0,i.kt)("inlineCode",{parentName:"li"},"autoRunEffect")," effect with the given dependencies"),(0,i.kt)("li",{parentName:"ul"},"Adds ",(0,i.kt)("inlineCode",{parentName:"li"},"disposeOldAsyncState")," effect with dispose function as dependency"),(0,i.kt)("li",{parentName:"ul"},"If inside provider, watch over async state with mode and key as dependencies.")),(0,i.kt)("p",null,"That's how ",(0,i.kt)("inlineCode",{parentName:"p"},"useAsyncState")," works. It is no magic."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useAsyncState"),"'s power comes directly from the React's model: effects around\ndependencies. If fact, it allows synchronizing dependencies to do a job.\nAnd of course, it subscribes or waits for the ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncState"),"'s instance that's\nholding our state, then it renders whenever that state notifies us to update\n(it always notifies!)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useAsyncState")," also exposes some power of ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncState"),": replaceState, abort... and so on."),(0,i.kt)("p",null,"When the subscription occurs, ",(0,i.kt)("inlineCode",{parentName:"p"},"events.subscribe")," is called which receives a\n",(0,i.kt)("inlineCode",{parentName:"p"},"getState")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," methods along with the subscription mode and invalidateCache."),(0,i.kt)("p",null,"This should allow all platforms to bind specific event listeners and/or perform\nsome logic: like ",(0,i.kt)("inlineCode",{parentName:"p"},"focus"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"scroll")," or any other event on any platform."),(0,i.kt)("h3",{id:"how-useasyncstate-subscription-config-works-"},"How ",(0,i.kt)("inlineCode",{parentName:"h3"},"useAsyncState")," subscription config works ?"),(0,i.kt)("p",null,"The exposed ",(0,i.kt)("inlineCode",{parentName:"p"},"useAsyncState"),"'s signature is the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function useAsyncStateExport<T, E>(\n  subscriptionConfig: UseAsyncStateConfig<T, E>,\n  dependencies?: any[]\n): UseAsyncState<T, E> {\n  return useAsyncStateBase(\n    subscriptionConfig,\n    dependencies\n  );\n}\n")),(0,i.kt)("p",null,"The subscription config may be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"Source")," object."),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," key"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"Producer")),(0,i.kt)("li",{parentName:"ul"},"A configuration object with supported properties")),(0,i.kt)("p",null,"Here is how the library parses -",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("inlineCode",{parentName:"strong"},"in order"))),"- the user configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If it is a ",(0,i.kt)("inlineCode",{parentName:"li"},"function")," (a ",(0,i.kt)("inlineCode",{parentName:"li"},"Producer")," then) creates default configuration with\nthe given ",(0,i.kt)("inlineCode",{parentName:"li"},"producer")," property."),(0,i.kt)("li",{parentName:"ul"},"If it is a ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," (a ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," then) creates default configuration with\nthe given ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," property."),(0,i.kt)("li",{parentName:"ul"},"If it is a ",(0,i.kt)("inlineCode",{parentName:"li"},"Source")," (a ",(0,i.kt)("inlineCode",{parentName:"li"},"Source")," then) creates default configuration with\nthe given ",(0,i.kt)("inlineCode",{parentName:"li"},"source")," property, and a ",(0,i.kt)("inlineCode",{parentName:"li"},"Symbol")," to detect that it is a Source config."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"config?.source")," it is a ",(0,i.kt)("inlineCode",{parentName:"li"},"Source")," (a ",(0,i.kt)("inlineCode",{parentName:"li"},"Source")," then) creates default\nconfiguration with the given ",(0,i.kt)("inlineCode",{parentName:"li"},"source")," property, and a ",(0,i.kt)("inlineCode",{parentName:"li"},"Symbol"),"\nto detect that it is a Source config."),(0,i.kt)("li",{parentName:"ul"},"Fallback with the default configuration.")),(0,i.kt)("p",null,"The default configuration is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"Object.freeze({\n  lazy: true,\n  condition: true,\n\n  areEqual: shallowEqual,\n  selector: oneObjectIdentity,\n})\n")),(0,i.kt)("h3",{id:"how-useasyncstate-subscription-mode-works-"},"How ",(0,i.kt)("inlineCode",{parentName:"h3"},"useAsyncState")," subscription mode works ?"),(0,i.kt)("p",null,"Then, after parsing the whole configuration, here is how the library\ndetermines -",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("strong",{parentName:"strong"},(0,i.kt)("inlineCode",{parentName:"strong"},"in order"))),"- the ",(0,i.kt)("inlineCode",{parentName:"p"},"SubscriptionMode"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If a source object is given, go ",(0,i.kt)("inlineCode",{parentName:"li"},"SOURCE")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"SOURCE_FORK")," given the configuration"),(0,i.kt)("li",{parentName:"ul"},"If outside provider, go ",(0,i.kt)("inlineCode",{parentName:"li"},"OUTSIDE_PROVIDER")),(0,i.kt)("li",{parentName:"ul"},"If no key is provided, go ",(0,i.kt)("inlineCode",{parentName:"li"},"STANDALONE")),(0,i.kt)("li",{parentName:"ul"},"If the given key exists in provider and we aren't hoisting nor forking, go ",(0,i.kt)("inlineCode",{parentName:"li"},"LISTEN")),(0,i.kt)("li",{parentName:"ul"},"If we aren't hoisting nor forking, but providing a ",(0,i.kt)("inlineCode",{parentName:"li"},"producer"),", go ",(0,i.kt)("inlineCode",{parentName:"li"},"STANDALONE")),(0,i.kt)("li",{parentName:"ul"},"If we are hoisting and (not yet in provider or not forking), go `HOIST"),(0,i.kt)("li",{parentName:"ul"},"If we are forking and it exists in provider, go ",(0,i.kt)("inlineCode",{parentName:"li"},"FORK"),"."),(0,i.kt)("li",{parentName:"ul"},"If It does not exist in provider, go ",(0,i.kt)("inlineCode",{parentName:"li"},"WAITING")),(0,i.kt)("li",{parentName:"ul"},"go ",(0,i.kt)("inlineCode",{parentName:"li"},"NOOP"),", this should not happen, and left to highlight a possible bug in the library.")),(0,i.kt)("h3",{id:"how-useasyncstate-subscription-to-asyncstate-works-"},"How ",(0,i.kt)("inlineCode",{parentName:"h3"},"useAsyncState")," subscription to ",(0,i.kt)("inlineCode",{parentName:"h3"},"AsyncState")," works ?"),(0,i.kt)("p",null,"Here is the whole subscription effect:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function subscribeToAsyncState(): CleanupFn {\n  if (!asyncState) { // do nothing on noop and waiting modes\n    return undefined;\n  }\n\n  let didClean = false;\n  // subscribe returns the unsubscribe function\n  const unsubscribe = asyncState.subscribe(\n    function onUpdate() {\n      if (didClean) {\n        return;\n      }\n      const newState = readStateFromAsyncState(asyncState, selector);\n\n      // schedule an update to react, everytime\n      // react should bail out updates when the old value is re-applied\n      setSelectedValue(old => {\n        return areEqual(old.state, newState)\n          ? old\n          :\n          makeUseAsyncStateReturnValue(\n            asyncState,\n            newState,\n            configuration.key as AsyncStateKey,\n            run,\n            mode\n          )\n      });\n    },\n    configuration.subscriptionKey\n  );\n  let postUnsubscribe: CleanupFn[] | undefined;\n  if (events?.subscribe) {\n    postUnsubscribe = [];\n\n    let subscribeHandlers: ((props: SubscribeEventProps<T>) => CleanupFn)[];\n\n    if (Array.isArray(events.subscribe)) {\n      subscribeHandlers = events.subscribe;\n    } else {\n      subscribeHandlers = [events.subscribe];\n    }\n\n    postUnsubscribe = subscribeHandlers.map(ev => ev({\n      run,\n      mode,\n      getState: () => asyncState.currentState,\n      invalidateCache: asyncState.invalidateCache.bind(asyncState),\n    }));\n  }\n  return function cleanup() {\n    didClean = true;\n    invokeIfPresent(postUnsubscribe);\n    (unsubscribe as () => void)();\n  }\n}\n")),(0,i.kt)("p",null,"I can't explain it better than itself."),(0,i.kt)("h2",{id:"until-we-meet-again"},"Until we meet again"),(0,i.kt)("p",null,"That's it for now. Please let me know if I should any other relevant information\nabout how the library handles it."),(0,i.kt)("img",{alt:"jkj",src:"https://i.imgflip.com/5ji7nm.jpg"}))}h.isMDXComponent=!0},876:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,k=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);