---
title: Cliqq App Development
type: guide
order: 1
---

## Introduction

Cliqq allows you to develop your own content to run inside the **Cliqq SuperApp**.

Your App can be developed as a webapp, using standard HTML, Javascript and CSS. While we recommend VueJS it is not mandatory.

This document details a library of functionality that allows your webapp to communicate with the Cliqq SuperApp.

> The super app provides common services that remove friction. Some of the common services are:
  - Common login and identity
  - Common payment method (wallet)
>
> It has two main components:
>
> - Super app container -This is the main application. A native mobile app developed by the owner of the super app. It is designed to provide the common functionalities to be used in the mini apps (login, payment system, notifications, etc.). This includes common framework and common APIs that allows 3rd party developers to create and integrate their own web apps.
>
> - Mini apps - These are web applications that provide extended functionality. The web applications reside within the super app container. These are developed either by the owner of the super app or 3rd party developers.



  The client (3rd party app) can invoke any actions that are available from the imported sdk, then the sdk will send the action to mobile then translate and perform the necesssary action/s and will send back the necessary details or response to the client via SDK. The SDK will serve as the bridge for the whole communication process from client to mobile and vice-versa.



**Communication between the super app container and mini apps:**



<p class="tip">
  We used injectJavaScript and onPostMessage for the communication between SuperApp and the Client (3rd party app).

  Feel free to visit this link for more and detailed explanation regarding those two. https://github.com/react-native-community/react-native-webview/blob/master/docs/Guide.md



![](images/sdk-communication.png)
</p>


## Quick Start

Import the `superapp-.client.min.js` file to your web application .

> Sample usage:

```vue
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './js/superapp.client.min.js'
export default { name: 'App' }
</script>
```
## API

### `getContact()`

  This function allows the user select a contact from the contact list of the mobile device.

  Below is the sample usage and response.

 > Sample usage:

```html
<div id="example">
  <button v-on:click="selectContact()">Select Contact</button>
</div>

<script>
  let { SuperApp } = window;

  export default {
    ...
    ...
    ...
    methods: {
      selectContact() {
        SuperApp.getContact(contact => {
          // Do something in your app
        })
      }
    }
  }

</script>

```

<p class="tip"> @function `getContact` - will t trigger the  getContact from the sdk
 in which the user can select contact from mobile and
`@returns` contact details object.

Data retreived from mobile:
{
  name: "John Doe",
  number: "09561123456"
}

</p>



### `walletPay()`

  This function allows the user to purchase product/s using by using the super app wallet. Once the transaction is successful the total amount purchased will automatically deducted from the super app wallet and confirmation modal will show of the items purchased.

  Below is the sample usage and response.

 > Sample usage:

```html

<div id="example">
  <button v-on:click="buyProduct()">Buy Product</button>
</div>

<script>
  let { SuperApp } = window;

  export default {
    ...
    ...
    ...
    methods: {
      buyProduct() {
        SuperApp.walletPay(
        {
          amount: item.price,
          items: [
            {
              name: `${item.name} - ${item.description}`,
              price: item.price,
              quantity: 1
            }
          ]
        },
        () => {
          this.$buefy.dialog.alert(
            `Successfully purchased <b>${item.name} - ${item.description}</b> to <b>+63${this.number}</b>`
          );
        }
      }
    }
  }

</script>
```

<p class="tip"> `@function walletPay` - will trigger the  walletPay function from the sdk
      in which if the transaction is successful will return true otherwise false.
      `@params amount` - Total amount price of the product
      `@params items` - Details of the item/s
      `@params callback`
      `@returns boolean`
</p>



