<div align="center">
  <a href="https://rainforesters.github.io/imsure" target="_blank" rel="noopener noreferrer">
    <img width="200" src="https://rainforesters.github.io/imsure/logo.svg" alt="Imsure logo">
  </a>
  <div>省时省力省钱省心省脑子</div>
  <div>好学好用的编程方式</div>
  <a href="https://rainforesters.github.io/imsure" target="_blank">快速开始</a>
</div>

## 简介

传统编程要求我们按步骤写代码，必须精确控制计算顺序。而这种声明式编程则颠覆了这一观念：只需要声明变量之间的依赖关系，系统会自动按照正确的顺序计算。这直观表达了程序的本质——数据转换。

```ts
// [编译期间]
// 定义规则，描述依赖关系，与顺序无关
A = X + Y  ✅
Y = D - E  ✅
X = B * C  ✅
// [运行期间]
// 可以在任何位置、任何时间进行赋值
E = 1 // wait 1s
C = 2 // wait 1s
B = 3 // wait 1s
D = 4 // wait 1s
(A: 9, Y: 3, X: 6)
```

在打破“顺序枷锁”后，无论是开发新功能还是应对需求变更，我们都只需关注和调整变量间的依赖关系，无需重构复杂的执行过程。这不仅大幅降低了开发复杂度，更显著提升了程序的稳定性和可维护性。

## 关于付费

这是否值得付费？我们热心开源，也大大方方地收费。付费方式为订阅制：

| 价格                                                                                                                                                            | 订阅                                                                                                    |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| 每个开发者~~每月 10$~~，限时优惠每月 1$。                                                                                                                       | <a href="https://rainforesters.github.io/imsure/guide/introduction.html#price" target="_blank">订阅</a> |
| 中国开发者享有优惠~~每月 10 元~~，限时优惠每月 1 元。                                                                                                           | <a href="https://rainforesters.github.io/imsure/guide/introduction.html#price" target="_blank">订阅</a> |
| 每撰写发布 1 篇关于 Imsure 的文章，可以享有 1 个月的使用权；<br>30 天内撰写发布 2 篇，可享有 6 个月的使用权；<br>30 天内撰写发布 3 篇，可享有 12 个月的使用权。 |

若不想付费，又不想撰写文章，也允许持续免费试用。可以用于商业目的，享有付费后的同等权利。
