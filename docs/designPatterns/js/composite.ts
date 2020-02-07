// 模拟文件系统
class BasicFile {
  name: string
  parent: SysFolder
  constructor(name: string) {
    this.name = name
  }
  isSameFile(file1, file2): boolean {
    return file1 === file2
  }
  remove() {
    if (!this.parent) return
    this.parent.files.splice(this.parent.files.findIndex(f => this.isSameFile(f, this)), 1)
  }
}

class SysFolder extends BasicFile {
  files: Array<SysFolder | SysFile> = []
  add(file: SysFolder | SysFile): void {
    file.parent = this
    this.files.push(file)
  }
  scan() {
    console.log(`Start scanning folder: ${this.name}`)
    this.files.forEach(f => f.scan())
  }
}

class SysFile extends BasicFile {
  scan() {
    console.log(`Start scanning file: ${this.name}`)
  }
}

const folder1 = new SysFolder('文件夹1')
const folder2 = new SysFolder('文件夹2')
const folder3 = new SysFolder('文件夹3')
const file1 = new SysFile('文件1')
const file2 = new SysFile('文件2')
const file3 = new SysFile('文件3')
const file4 = new SysFile('文件4')
folder1.add(file1)
folder1.add(file2)
folder1.add(folder2)
folder1.add(folder3)
folder2.add(file3)
folder2.add(file4)
folder3.remove()
file3.remove()
folder1.scan()