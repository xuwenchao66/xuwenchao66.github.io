class EventEmitter {
  private events: Array<Function>
  on(eventName: string, func: Function, context?: Object): void {
  }
  once(eventName: string): void {
  }
  emit(eventName: string): boolean {
    return true
  }
  off(eventName: string): boolean {
    return false
  }
}