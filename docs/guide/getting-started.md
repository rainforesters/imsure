# 快速开始 {#getting-started}

## 安装 {#installation}

```sh [npm]
npm add imsure
```

## 马上学会 {#got-it}

现在，我们来学习如何用代码实现[上一章节](./introduction)里的示例。

<!-- prettier-ignore-start -->
```ts{12-14,16-18,20-22}
// Finite State Machine
const State = typedef({
    A: int32,
    B: int32,
    C: int32,
    D: int32,
    E: int32,
    X: int32,
    Y: int32,
})

ruledef(State, 'A', { '@or': true, X: true, Y: true }, (self) => {
    self.A = self.X + self.Y
})

ruledef(State, 'Y', { '@or': true, D: true, E: true }, (self) => {
    self.Y = self.D - self.E
})

ruledef(State, 'X', { '@or': true, B: true, C: true }, (self) => {
    self.X = self.B * self.C
})

const state = typeinit(State)
state.E = 1 // (A: -1, Y: -1, X: 0)
state.C = 2 // (A: -1, Y: -1, X: 0)
state.B = 3 // (A: 5, Y: -1, X: 6)
state.D = 4 // (A: 9, Y: 3, X: 6)
```
<!-- prettier-ignore-end -->

恭喜！你已经学会了。
