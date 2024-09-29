<template>
    <div id="vertical-parent">
        <div id="course-name">Linear Algebra</div>
        <div id="parent">
            <div id="table-of-content">
                <h2>Table of Contents</h2>
                <div class="contents-item" v-for="(item, index) in Array.from({length: 10}, (_, i) => i+1)" :key="index">
                    Section {{ item }}
                </div>
            </div>
            <div id="bar"></div>
            <div id="content" v-html="markdownToHtml"></div>
        </div>
    </div>
</template>

<script>
import { marked } from 'marked';
export default {
    data() { 
        //Data shoul come from pinia add a method to the global store thats fetches whatever is given from the search menu
        return { markdown: `# First-Order Differential Equations

A first-order differential equation is an ordinary differential equation whose highest derivative has the form of order one. In other words, it is an equation that involves a function and its first derivative.

## Introduction to First-Order DEs

First-order differential equations are important in many fields such as physics, engineering, economics, and computer science. They describe how a quantity changes over time or space. The study of first-order differential equations helps us understand the behavior of various physical systems, including population growth, chemical reactions, electrical circuits, and mechanical systems.

## Solving First-Order DEs

To solve a first-order differential equation, we need to isolate the derivative of the unknown function. This can be done using several methods, such as:

* Separation of variables: This method involves separating the variables (usually $x$ and $t$) in the equation.
* Integrating factor method: This method involves multiplying the differential equation by a suitable function to make it exact.
* Undetermined coefficients: This method involves assuming a particular solution with an unknown coefficient.

## General Form of First-Order DEs

A first-order differential equation can be written in the following general form:

\[
\frac{dy}{dx} + P(x)y = Q(x)
\]

where $P(x)$ and $Q(x)$ are functions of $x$.

## Separation of Variables

The separation of variables method involves rearranging the differential equation to separate the variables. This can be done as follows:

* Multiply both sides by a suitable function to make the left-hand side exact.
* Integrate both sides with respect to their respective variables.

Let's consider an example: $\frac{dy}{dx} + 2y = e^x$.

First, we multiply both sides by $e^{-x}$:
\[
e^{-x}\cdot\frac{dy}{dx} + e^{-x}\cdot2y = e^{-x}\cdot e^x
\]

Simplifying the equation:
\[
\frac{d}{dx}(e^{-x}y) = 1
\]

Integrating both sides with respect to $x$:
\[
e^{-x}y = x + C
\]

where $C$ is an arbitrary constant. Now, we can solve for $y$ by multiplying both sides by $e^x$.

## Integrating Factor Method

The integrating factor method involves multiplying the differential equation by a suitable function to make it exact. The general form of this method is:

* Multiply both sides by $\mu(x)$
* Choose $\mu(x)$ such that the left-hand side becomes an exact derivative.
* Integrate both sides with respect to their respective variables.

Let's consider an example: $\frac{dy}{dx} + x^2y = 0$.

We choose $\mu(x) = e^{\int x^2 dx}$. Multiplying both sides by $\mu(x)$:
\[
e^{x^3}\cdot\frac{dy}{dx} + e^{x^3}\cdot x^2y = 0
\]

Simplifying the equation:
\[
\frac{d}{dx}(e^{x^3}y) = 0
\]

Integrating both sides with respect to $x$:
\[
e^{x^3}y = C
\]

where $C$ is an arbitrary constant. Now, we can solve for $y$ by dividing both sides by $e^{x^3}$.

## Undetermined Coefficients

The undetermined coefficients method involves assuming a particular solution with an unknown coefficient. The general form of this method is:

* Assume a particular solution with an unknown coefficient
* Differentiate the assumed solution to obtain another equation involving the unknown coefficient
* Solve for the unknown coefficient and substitute it into the assumed solution.

Let's consider an example: $y'' + y = e^x$.

We assume a particular solution of the form:
\[
y_p(x) = Ax + B
\]

Differentiating the assumed solution:
\[
y'_p(x) = A
\]
\[
y''_p(x) = 0
\]

Substituting into the differential equation:
\[
A + (Ax+B) = e^x
\]

Equating coefficients:
\[
A + B = 1, \qquad A=0
\]

Solving for $B$:
\[
B = 1
\]

Now we can write the particular solution:
\[
y_p(x) = x + 1
\]

## Solving Linear First-Order DEs

To solve linear first-order differential equations, we can use the integrating factor method or the undetermined coefficients method. In this case, we will consider only one example:

Let's consider an example: $\frac{dy}{dx} + y = e^x$.

We multiply both sides by $e^{-x}$:
\[
e^{-x}\cdot\frac{dy}{dx} + e^{-x}\cdot y = e^{-x}e^x
\]

Simplifying the equation:
\[
\frac{d}{dx}(e^{-x}y) = 1
\]

Integrating both sides with respect to $x$:
\[
e^{-x}y = x + C
\]

where $C$ is an arbitrary constant. Now, we can solve for $y$ by multiplying both sides by $e^x$.

## Solving Non-Linear First-Order DEs

To solve non-linear first-order differential equations, we need to use numerical methods or approximation techniques such as perturbation methods or asymptotic analysis.

Let's consider an example: $\frac{dy}{dx} + y^2 = e^{-x}$.

We can try to solve this equation using the integrating factor method. However, this will not lead to a solution that matches the exact form of $e^{-x}$. Therefore, we need to use numerical methods to approximate the solution.

## Conclusion

First-order differential equations are important in many fields and have various applications. In this lesson, we introduced the general form of first-order DEs, discussed several methods for solving them, and provided examples using different techniques. We also touched on non-linear first-order DEs and how they can be solved numerically or approximated.

## Practice Problems

1. Solve $\frac{dy}{dx} + y = e^x$.
2. Solve $\frac{dy}{dx} - 3y = 0$ using the integrating factor method.
3. Solve $y'' + y' + 3y = e^{2x}$ using undetermined coefficients.
4. Use numerical methods to solve $\frac{dy}{dx} + y^2 = e^{-x}$.

5. Consider the general form of a first-order DE: $\frac{dy}{dx} + P(x)y = Q(x)$. Show that this equation is homogeneous if $P(x) = 0$ and show that it is inhomogeneous otherwise.

6. Suppose we have two first-order differential equations:
\[
\frac{dy_1}{dx} - \frac{dy_2}{dx} = f(x)
\]
\[
\frac{d^2y_1}{dx^2} + \frac{d^2y_2}{dx^2} = 0
\]

Show that the solution to this system can be obtained by combining the solutions of each individual equation.

Note: This is not a full set of practice problems, but rather some examples to illustrate various techniques.` }
    },
    computed: {
        markdownToHtml() {
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
    background-color: gray;
    padding: 14px 0;
    padding-left: 12px;
    text-align: left;
    cursor: pointer;
    font-size: 18px;
}
</style>
<style>
#app:has(#parent) {
  padding: 1rem .5rem !important;
  margin: 0 !important;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
}
body:has(#parent) {
  margin: 0 auto;
}
</style>