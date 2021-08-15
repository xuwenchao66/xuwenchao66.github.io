const platforms = {
  android: 'android',
  ios: 'ios'
}

// 抽象产品（接口）
interface IButton {
  render(): void
}
// 具体产品
class IOSButton implements IButton {
  render() {
    console.log('Rendering ios button.')
  }
}
// 具体产品
class AndroidButton implements IButton {
  render() {
    console.log('Rendering android button.')
  }
}
// 抽象工厂
abstract class DialogFactory {
  abstract createButton(): IButton
  abstract platform: string
  render() {
    console.log(`Render on ${this.platform}.`)
    const button = this.createButton()
    button.render()
  }
}
// 具体工厂
class IOSDialogFactory extends DialogFactory {
  platform = platforms.ios
  createButton(): IButton {
    return new IOSButton()
  }
}
// 具体工厂
class AndroidDialogFactory extends DialogFactory {
  platform = platforms.android
  createButton(): IButton {
    return new AndroidButton()
  }
}

new IOSDialogFactory().render()
new AndroidDialogFactory().render()
