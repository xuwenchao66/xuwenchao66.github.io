# linux 常用命令

因为 linux 和 mac os 都是 unix like 的系统，所以双方的快捷键大同小异，加之 linux 和 mac 在开发中都常会用到，所以这里也顺便提及一些 mac 下的快捷键。

linux 中很多快捷键都是通过 shift 组合来完成的，比如 ctrl + shift + w、ctrl + shift + t，而在 mac 中很多则是则是通过 command（win）来实现相同快捷操作，比如 command + w（关闭终端），command + t（新建 tab）。所以在记住了 linux 下的组合快捷键之后，在 mac 下多数命令都可以通过替换为 command 来完成相同操作。

## 终端控制

### 打开终端

ctrl + alt + t

### 关闭终端

ctrl + shift + w

### 新建窗口

ctrl + shift + n（new）

### 新建 tab

ctrl + shift + t（tab）

### 在 tab 之间切换

- alt + tab 的编号（如 alt + 2， 切换到第二个 tab）
- ctrl + PgUp 切换到上一个 tab
- ctrl + PgDn 切换到下一个 tab

### 关闭 tab

ctrl + d

## 光标移动

### 前移一个词

alt + f （forward），mac 中 option（alt）+ ➡️

### 后移一个词

alt + b （back），mac 中 option（alt）+ ⬅️

### 移动至命令行首

ctrl + a

### 移动至命令行尾

ctrl + e （end）

### 移动到当前词的结尾

esc + f

### 移动到当前词的开头

esc + b

## 删除

### 删除光标前一个词

ctrl + w

### 删除光标后一个词

alt + d

### 删除整行

ctrl + u

### 删除光标所在位置后的所有命令

ctrl + k

### 向前删除一个字符

ctrl + h 或 backspace

### 向后删除一个字符

ctrl + d 或 delete

## 历史命令

### 搜索历史命令，输入关键字，其余匹配自动补全

ctrl + r （reverse-i-search，根据关键字反向查询历史记录）

### 查看历史,有对应编号

- history
- history n，n 为查看最近的 n 条

### 按编号执行历史命令

!767，执行历史中的第 767 条命令

### 执行上条命令

!!

### 查看上条命令

ctrl + p（previous）或 ⬆️

### 查看下条命令

ctrl + n（next）或 ⬇️

## 进程、任务管理

job（任务）、process（进程） 的区别。[参考](https://unix.stackexchange.com/questions/4214/what-is-the-difference-between-a-job-and-a-process)

- process 是拥有自己地址空间的正在运行的程序。
- job 是 shell 中的一个概念，任何一个在 shell 中通过命令交互启动的程序都是 job，也就是说不同的 shell 看不到其他 shell 的 job，shell 关闭了，job 也随之关闭。

### 查看当前进程快照

- ps（process status），仅查看当前终端会话中的进程，切展示的信息比较简单
- ps au，仅查看当前终端会话中的进程，展示比较详细的信息
- ps x，查看系统中的所进程
- ps aux，查看所有进程，展示比较详细的信息
- ps -ef，同 ps aux，但两者属于不同的展示风格
- ps -ef | grep keyword，常用命令，组合管道操作、grep，过滤出与 keyword 关键字相关的进程

### 实时展示进程状态

- top
- top -c，显示完整命令

### 查看任务

jobs

### 中断当前任务

ctrl + c

### 暂停当前任务

ctrl + z

### 后台执行任务

- 在命令后加上 `&` 符号，如 npm run dev &
- 或，先将 job 暂停，然后执行 bg，将任务放至后台

### 前台执行任务

- fg，恢复最后一个暂停的任务至前台。
- fg %n，如想恢复指定暂停的任务加上`%n`，n 为任务 id（此参数在其他 job 命令中通用，如 bg %n）。

### 杀死进程、任务

- kill n（n 为进程 id）
- kill %n（n 为任务 id，如果要杀死任务，也可根据任务 id 杀死任务）

## 硬件、系统信息

### 查看磁盘空间使用情况

- df
- df -h，以更方便阅读的方式显示
- df -l，只列出本地磁盘

### 查看文件、目录的磁盘占用空间情况

- du file，如 file 为文件，显示其大小，如为目录显示该目录及其子目录大小
- du -a file，显示目录及目录所有文件（文件夹以及文件）大小
- du -h file，以易读方式显示
- du -s file，仅显示总计（不显示子文件、目录）
- du --max-depth=1 file，仅显示所在目录深度为 1 的文件

### 查看内存使用情况

- free
- free -h，以易读方式显示
- free -g，以 gb 为单位显示内存使用情况，同理有 -k、-m
- free -t，total 的意思，以总和方式显示
- free -s n，周期性查询内存使用情况，n 为秒
- free -hs n，组合命令

## 参考

1. [linuxcommand.org](http://linuxcommand.org/lc3_learning_the_shell.php)
2. [The Linux Command Line（中文版）](http://billie66.github.io/TLCL/book/)
3. [Linux 的 shell 终端常用快捷键大全](https://zhuanlan.zhihu.com/p/29538650)
4. [Linux 命令大全 | 菜鸟教程](https://www.runoob.com/linux/linux-command-manual.html)
5. [Linux 常用命令集合](https://www.runoob.com/w3cnote/linux-common-command.html)
6. [Linux 常用命令学习](https://www.runoob.com/w3cnote/linux-common-command-2.html)
