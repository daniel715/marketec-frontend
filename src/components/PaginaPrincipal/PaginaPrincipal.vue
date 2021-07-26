<template>
  <div class="container">
    <div class="father">
      <headerComponent/>
      <searchSection/>
      <productsBar />
      <productDiscountBar />
      <featuredStoresBar/>
      <footerComponent/>
    </div>
  </div>
</template>

<script>
import productsBar from "./productsBar.vue";
import productDiscountBar from "./productDiscountBar.vue";
import headerComponent from "../partials/header.vue"
import searchSection from "../PaginaPrincipal/searchSection.vue"
import footerComponent from "../partials/footer.vue"
import featuredStoresBar from "./featuredStoresBar"

export default {
  components: {
    productsBar,
    productDiscountBar,
    headerComponent,
    searchSection,
    footerComponent,
    featuredStoresBar
  },
};
</script>

<style lang="sass" scoped>
.container
    display: flex
    width: 100%
    justify-content: center
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAAEtCAMAAABalIDUAAABL1BMVEX2h0/2h1L1iUv6h0/3gjv4hlD0g0L3h0/6iEz2gkX3h072iE30iFD1iE70g0X3iEvyik30gz33gT/7hUz7//vriFH4hVX0iFPwi0zxilH2//bhqIL8hE/2fDP5gUf6h0frh1TpjFXwyabkup7SiVbrrYPkjF39+OH/9vPlzr///Ov328H+//TlmW/x//z97NzbjGDjq43jjFv71bXvy7HNiWXvwqPwupLn49TqhFzmooPz3MXPooj+8M/vyaHhvqLjn3bfjVT637r57ubjhWLhj2vji0v13MrslWrz0b7Nm3f3+eDgtI7luYnkpYfannfWrZnVek6wYz/he0qVVUG/blHKakPWgl2zXTh4RjG0c1SHRCpxSTuaZFV2OipkIQCfYUOMXTqpYkPFe1iFSiyhZembAAAIKUlEQVR4nO3d/1vaSB7A8Uxmx0nny2ZqAiGWlVB3Yw+hIKK7tGvX7tmr3u3Ww2q92r071/r//w0XbH0elRQUPsD0uc/78QeNCK8nQVAywzjfLT9YXF6wvYfOIpU+82yPOgtEaWZ9RWeRaTlvxei4803/uDu2JzOndsm8GXcInbChc6IUp4xpxRwjPm2w1RkLolxNHPN5g6VO6cqK6/lGUf5pg6VOv5BUTBxrST9vsNPJq49Xvn/0Q8LK6vMWO50iXX3yl9paSmNm9XEXyVoY1lcKgeVORzRqT5stv0I+PyzZ6vSjTm294IuiP+zxk19+zDNDW+tdbaIhTuFSpjXTRs7Ryill9Prt5+xPT2gqjSJsns7Lrm0YdPJAxklisg85W9tNxU1m3v6kor3R2dz6sTBP5+1ynJKnzfCneqc7z/9HdNb1r/OcXmEle5R9FinHnnKcWuhGM3zeVpY7lVMprDcPSq7lThJ5Im1HrjsfUX55z0dKcOUxqXN/YE5Z+vw+EDphQyds6IQNnbChEzZ0woZO2NAJGzphQyds6IRtps7IDYqxVCWPjr7srWbqrLiKLpbL/fOB922WTlGpPmvEaaqd6N4/O1Onaay+/nn7RRzc/xW2mTr9tBk+qf+SVMzoC99qpk43WamHzZYe4xW2mf4elcut7fpKVY7xwupMnaRidh63Xa3E6MveaqZOU6Ksajyl/Hv/6CydPIhJ4PpeZLlzktAJGzphQyds6IQNnbChEzZ0woZO2NAJGzphQyds6IQNnbChEzZ0woZO2NAJGzphG+3kWlFONZ/vMPWRThWUXqZJ8pLMd9j/SKehyePtzc6v3fuf84Fs9P6USWfpr0uru/GsSLmNdBaNeVYP6yvF0qxIuY10Mld3O2GzRWd23PtTpAZO1I52Spo0nj+q8vuPPYFstFN7tNAuyDHGyEA20kmNDKRX8bz5zjwd6QxMzBztKDWzx3mSxYUQo+ZF3mz2u5EpN2k0Sq2WVlLaPA+aiPZa8+fmWkFJ316nkOVyeyOsh/uJttrpO7SwU1uqvYns3p9+7HvJfn0/FZbfP7NI68Wr+Pr8ZkudNP4bD74CJ3Eqy+T6qEZLnYpQfmN0m6VOQan0rv/RZKlzIHTChk7Y0AkbOmFDJ2zohA2dsKETNnTChk7Y0AkbkFMHLDJKjTOD9G5B7U+PMaqEUZY7eewHRRHEKpj8unIDcorIi581qo09b/Lryg3I6UfBy9X+a+rJ/ac83ikgJ4uD7uuwFnZifzpQOGe0XntaayhptVMrz6+uhVtxZLdTkuxqWlspJXY7XRKbsqMcYrlz6qETNnTChk7Y0AkbOmFDJ2zohA2dsKETNnTChk7Y0AkbOmFD590T1CEk0r4c8jaWNjgdIo0SThwFXx6sb4XTMS83dlpbO0Nek7TByQN/p177qbZSsHt/ErbYfh2GtYPyl+fk2OCkzCk+qocdNWTpHRucQjnl9lrzgA95ydwGp47ZstprpN6QBcFscEpd9D0dEX/IinVWOEXRSJ8yl315h9rgvEvohA2dsKETNnTChk7Y0AlbvnNKg6UmaNDJiywoeQ5zg3muY3u7QacouaTVJenLkuXrAmu1t73/9+e2r1/MCXn1j7BeX49tWng1Z3+6laTzJKw1SjYtZJtz/wwMf1WrrySu3cfdYSpIftxIx1i8YorlOBVZ9pJETWtk7HjlHHeXuS4TniB2rwctfK40E9qxifmVP7/bFzphQyds6IQNnbChEzZ0woZO2NAJGzphQyds6IQNnbChEzZ0woZO2Oxxas0dQxiJc88LWOOkJqbaL1aK0uNEDLyJvDVOYTSLisnDSGjOBldet8bJpcuSxyvpb79HhA4ubmGNk0mfJM2l/fqvSUTFwDkMa5xcUJJsLYVL64rkDP+1xqkpU3GrGTZbuYNArXEKzlVUXa+9yV/Xwh6noxRx04O0kvtte5w6VoyXaCn/vKo1zuwe2l9zx5P5o1Iscg4NnbChEzZ0woZO2NAJGzphQyds6ITt/9DJWX8Bt/6qajDXdyPQ/ckdRux3aqMcxr4G56ejbrtT+DKOIhLZ7nQC/9HGq4MXqTOFCQKQTpL8UmuubjdKdjtFhRzUnobPq77dTlkJCp16/U00jRVFL51etjMEd+Rk74Gr4rJobHdST09hRPulU6jI0UrdXAnt/nFKkr2UBEPeZmHsLp2R8IR2BStOuCgopbpY9txpTBDoO5nnGpcuVyqDp0PulebU89ySoVNYA/XSqXYetduNghjy/gh3SEhFuDZCTGOizTc8O+7JWu2fr7e/j4oTzdwT2dNm/68mOuFhye1h5nSilaUn2ePe1BYNAKjvpHSz9rT+W1Sexi8qUJdOL92qPW/RsrRpptnN+k6mWPqioSpq2Bu3jI7fWhoZtEVPZ89C3IkjIcZbU5lH2iMqe6aI03ZCKFN+RCp+FHjmYYE7JOBJOY4DKiZb2yNz6v7RHn9P6N5h2jt5y6Pe0cXx7rvqu2rvpPfuMOn11HE3/VfSO3zbO+yevGV0kkeTK+f46ZP3p8cfEi8+/OOPf//nbPO/m2fvT89ON/88S49OT0/PTy92z89e/XmecDNXp/p4cbh3njl7799vHp2dHp2eHX38cNS6uGifnX88Oj7+2D08SS8+VE3+mct7OPmYXV6DbveSpBr7cbWXdrvJ2zRpp0l3N+3ulk6SQva9QlCoqt1uLOkEt7MYMDp+/dXPXVcpfZnr6qtPXGP0VcZImX1kjX07xvlu4dsHk7Ww8O2nFrLPHlx9drXx6svLxr+N/wGufcxIOymXPAAAAABJRU5ErkJggg==) no-repeat fixed center;
    background-size: cover;
    height: 100%;
    width: 100% ;
    text-align: center;
.father
    width: 80%

</style>
