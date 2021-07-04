# 进程、任务管理

`job`（任务）、`process`（进程）的区别。[参考](https://unix.stackexchange.com/questions/4214/what-is-the-difference-between-a-job-and-a-process)

- `process` 是拥有自己地址空间的正在运行的程序。
- `job` 是 `shell` 中的一个概念，任何一个在 `shell` 中通过命令交互启动的程序都是 `job`，也就是说不同的 `shell` 看不到其他 `shell` 的 `job`，`shell` 关闭了，`job` 也随之关闭。

## 查看当前进程快照

- `ps（process status）`，仅查看当前终端会话中的进程，切展示的信息比较简单
- `ps au`，仅查看当前终端会话中的进程，展示比较详细的信息
- `ps x`，查看系统中的所进程
- `ps aux`，查看所有进程，展示比较详细的信息
- `ps -ef`，同 `ps aux`，但两者属于不同的展示风格(`e` 为 `select every process`，`f` 为 `full listing`)
- `ps -ef | grep keyword`，常用命令，组合管道操作、`grep`，过滤出与 `keyword` 关键字相关的进程

## 获取目标进程信息

- `pidof process_name`（进程名），根据进程名获取进程 `id`
- `ps -fC process_name`，`C` 为 `select processes by command name`，根据命令名称选则进程
- `ps -ef | grep process_name`，使用管道操作根据进程名过滤出目标进程信息

## 实时展示进程状态

- `top`
- `top -c`，显示完整命令
- `top -p pid1,pid2,pid3` ，查看指定 id 的进程实时状态

## 查看任务

`jobs`

## 中断当前任务

`ctrl + c`

## 暂停当前任务

`ctrl + z`

## 后台执行任务

- 在命令后加上 `&` 符号，如 `npm run dev &`
- 或，先将 `job` 暂停，然后执行 `bg`，将任务放至后台

## 前台执行任务

- `fg`，恢复最后一个暂停的任务至前台。
- `fg %n`，如想恢复指定暂停的任务加上`%n`，`n` 为任务 `id`（此参数在其他 `job` 命令中通用，如 `bg %n`）。

## 杀死进程、任务

- `kill n`（`n` 为进程 `id`）
- `kill %n`（`n` 为任务 `id`，如果要杀死任务，也可根据任务 `id` 杀死任务）
