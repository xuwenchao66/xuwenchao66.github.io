// 实现宏命令（MacroCommand，一组命令的集合）
interface Command {
  execute: Function
}
class MacroCommand {
  commandsList: Array<Command> = []
  add(command: Command): void {
    this.commandsList.push(command)
  }
  execute() {
    this.commandsList.forEach(command => {
      command.execute()
    })
  }
}

const commandOpenDoor: Command = {
  execute() {
    console.log('open the door')
  }
}

const commandCloseDoor: Command = {
  execute() {
    console.log('close the door')
  }
}

const MC = new MacroCommand()
MC.add(commandOpenDoor)
MC.add(commandCloseDoor)
MC.execute()