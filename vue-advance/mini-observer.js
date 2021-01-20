class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  depend() {
    if (activeUpdate) {
      console.log("depend..");
      this.subscribers.add(activeUpdate);
    }
  }

  notify() {
    console.log("notify..");
    this.subscribers.forEach((sub) => sub());
  }
}

function observe(obj) {
  // 给每个key添加get，set
  // 给每个key添加监控Dep实例，每个Dep实例包含一个subscribers集合，depend和notify方法
  // 每当执行get，Dep实例的subscribers收集update并执行depend方法。
  // 每执行set，Dep实例执行notify方法，notify方法会执行subscribers中的所有收集的依赖函数的update

  Object.keys(obj).forEach((key) => {
    let internalValue = obj[key];

    // each property gets a dependency instance
    const dep = new Dep();

    Object.defineProperty(obj, key, {
      // The getter is responsible for registering subscribers
      get() {
        dep.depend();
        return internalValue;
      },

      // The setter is responsible for notifying change
      set(newVal) {
        const changed = internalValue !== newVal;
        internalValue = newVal;
        // triggering re-computation
        if (changed) {
          dep.notify();
        }
      },
    });
  });
  return obj;
}

let activeUpdate = null;

function autorun(update) {
  // wrap the raw update function into a "job" function that registers and
  // unregisters itself as the current active job when invoked
  const wrappedUpdate = () => {
    activeUpdate = wrappedUpdate;
    update();
    activeUpdate = null;
  };
  wrappedUpdate();
}

const state = { count: 0 };

observe(state);

autorun(() => {
  console.log(`count is: ${state.count}`);
});

state.count++;

state.count++;
