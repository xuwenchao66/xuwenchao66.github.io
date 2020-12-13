// 抽象产品
interface IButton {
  render(): void
}
interface IDialog {
  render(): void
}
// 同系列的具体产品
class WinButton implements IButton {
  render() {
    console.log('render windows button.')
  }
}
class WinDialog implements IDialog {
  render() {
    console.log('render windows dialog.')
  }
}
// 同系列的具体产品
class MacButton implements IButton {
  render() {
    console.log('render mac button.')
  }
}
class MacDialog implements IDialog {
  render() {
    console.log('render mac dialog.')
  }
}
// 抽象工厂
abstract class GUIFactory {
  abstract createButton(): IButton
  abstract createDialog(): IDialog
  render() {
    this.createButton().render()
    this.createDialog().render()
  }
}

// 具体工厂
class WindowsFactory extends GUIFactory {
  createButton(): WinButton {
    return new WinButton()
  }
  createDialog(): WinDialog {
    return new WinDialog()
  }
}
class MacFactory extends GUIFactory {
  createButton(): MacButton {
    return new MacButton()
  }
  createDialog(): MacDialog {
    return new MacDialog()
  }
}
// windows平台下的GUI渲染
new WindowsFactory().render()
// mac平台下的GUI渲染
new MacFactory().render()
