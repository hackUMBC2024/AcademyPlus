<template>
    <div id="vertical-parent">
        <div id="course-name">Academy+</div>
        <div id="parent">
            <div id="table-of-content">
                <h3 class="toc">Table of Contents</h3>
                <div class="contents-item" v-for="(item, index) in Array.from({length: 10}, (_, i) => i+1)" :key="index">
                    Section {{ item }}
                    <hr>
                </div>
            </div>
            <div id="bar"></div>
            <div id="content" v-html="markdownToHtml"></div>
        </div>
    </div>
</template>

<script>
import { marked } from 'marked';
import Katex from "katex";
import extendedLatex from "marked-extended-latex";

export default {
    data() { 
        //Data should come from pinia add a method to the global store thats fetches whatever is given from the search menu
        return { markdown: String.raw`**Calculus II**
================

### Introduction to Calculus II

Welcome to Calculus II, where we will delve into the world of advanced calculus. In this course, you will learn about topics such as sequences and series, improper integrals, linear transformations, differential equations, and more.

Throughout the semester, we will use a variety of mathematical tools and techniques to analyze functions, model real-world phenomena, and solve problems.

### Sequences and Series

In Calculus I, we introduced the concept of limits. In this course, we will explore sequences and series in greater depth. We will define convergence tests for both sequences and series, including the Nth-term test, the Cauchy test, and the ratio test.

We will also study power series, Taylor series, and Maclaurin series. These tools will allow us to represent functions using infinite sums, which will enable us to solve problems involving limits, derivatives, and integrals.

#### Power Series

A power series is a function represented as an infinite sum of terms, where each term has the form $c_nx^n$. The coefficients $c_n$ can be found using various methods, such as finding the Taylor series expansion of a function or using the binomial theorem.

For example, consider the geometric series $\sum_{n=0}^{\infty} x^n = \frac{1}{1-x}$ for $|x|<1$. This is an example of a power series where each term has the form $c_nx^n$ with $c_n=1$.

#### Taylor Series

A Taylor series is a special type of power series that represents a function centered at a specific point. The Taylor series expansion of a function f(x) around x=a is given by:

$$f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n$$

where $f^{(n)}(a)$ denotes the nth derivative of f(x) evaluated at x=a.

For example, consider the function f(x)=e^x. The Taylor series expansion of e^x around x=0 is given by:

$$e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!}=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+...$$

#### Maclaurin Series

A Maclaurin series is a special type of Taylor series that represents a function centered at x=0. The Maclaurin series expansion of a function f(x) around x=0 is given by:

$$f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}x^n$$

For example, consider the function f(x)=e^x. The Maclaurin series expansion of e^x around x=0 is given by:

$$e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!}=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+...$$

### Improper Integrals

In Calculus I, we learned about definite integrals. In this course, we will explore improper integrals, which are integrals of functions that have singularities.

An improper integral is defined as the limit of a definite integral as the upper or lower bound approaches infinity. For example, consider the function f(x)=1/x and the improper integral:

$$\int_{0}^{\infty}\frac{1}{x}dx=\lim_{b\to\infty}\int_{0}^{b}\frac{1}{x}dx$$

Using integration by substitution with u=ln(x), we can evaluate this improper integral as:

$$\int_{0}^{\infty}\frac{1}{x}dx=\lim_{b\to\infty}\left[\ln|x|\right]_{x=0}^{x=b}= \lim_{b\to\infty}\ln|b|=\infty$$

### Linear Transformations

A linear transformation is a function T:R^n → R^n that satisfies the properties of linearity, such as:

* T(u+v)=T(u)+T(v)
* T(cu)=cT(u)

where u,v are vectors in R^n and c is a scalar.

Linear transformations can be represented using matrices. Specifically, if T:R^n → R^n is a linear transformation with matrix representation A, then the change of basis from R^n to R^m induced by T can be represented using an invertible matrix B:

$$T(v)=B^{-1}Av$$

where v is a vector in R^n.

### Differential Equations

A differential equation is an equation that involves derivatives. There are several types of differential equations, including:

* Ordinary differential equations (ODEs): ODEs involve only one independent variable and one dependent variable.
* Partial differential equations (PDEs): PDEs involve multiple independent variables and depend on all of them.

We will study the general solution to first-order linear ODEs, which are given by:

$$\frac{dy}{dx}+Py=q$$

where y is a function of x and p,q are constants. We can solve these equations using an integrating factor.

For example, consider the ODE:

$$\frac{dy}{dx}-2y=3x$$

Multiplying both sides by e^(-2x), we get:

$$e^{-2x}\frac{dy}{dx}+2ye^{-2x}=3xe^{-2x}$$

This is a first-order linear ODE with constant coefficients. We can solve this equation using an integrating factor.

### Conclusion

In this course, we have explored several topics in advanced calculus, including sequences and series, improper integrals, linear transformations, and differential equations. These topics will enable us to analyze functions, model real-world phenomena, and solve problems involving limits, derivatives, and integrals.

**Practice Problems**

Note: These practice problems are intended to give you a sense of what to expect in the course, but they do not provide a comprehensive review or assessment of your knowledge.
`.replace(/\$\$/g, '$') }
    },
    computed: {
        markdownToHtml() {
            const options = {
                render: (formula , _displayMode) => {
                    return Katex.renderToString(formula, { displayMode: true, output: 'mathml' });
                }
            };

            marked.use(extendedLatex(options))
            return marked(this.markdown);
        }
    }
}
</script>
<style scoped>
#vertical-parent {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: hidden;
}
.toc {
    text-align: center;
}

hr {
    width:120%;
    margin-left:-20px;
}
#course-name {
    height: 20vw;
    font-size: 24px;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    background-color: #D1E9F6;
    color: black;
}
#parent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80vw;
}

.katex-html {
    color: red;
}

#table-of-content {
  height: inherit;
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: scroll;
  overflow-x: hidden;
}
#table-of-content h2 {
    text-align: center;
    margin-left: -7px;
    text-transform: uppercase;
}
#content {
  height: inherit;
  width: 80%;
  overflow-y: scroll;
  padding-left: 10px;
}
#bar {
    background-color: black;
    height: inherit;
    width: 2%;
}
.contents-item {
    width: 100%;
    padding: 14px 0;
    padding-left: 12px;
    text-align: left;
    cursor: pointer;
    font-size: 18px;
}
</style>
<style>
#app:has(#vertical-parent) {
  padding: 1rem .5rem !important;
  margin: 0 !important;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  max-width: fit-content !important;
}
body:has(#vertical-parent) {
  margin: 0 auto;
}
</style>