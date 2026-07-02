# ------------------------------------ VARIABLES ------------------------------------

Variable data store korar jonno use kora hoy. Amra jokhoni ekta variable declare kori, JavaScript engine computer memory-te oi variable-er jonno ekta named location create kore. Erpor oi variable-er maddhome amra data store, access ebong update korte pari.

## **KEYWORDS AND WAYS TO DECLARE VARIABLES**

JavaScript-e variable 4 vabe declare kora jay:

- `const`
- `let`
- `var`
- Without keyword (Not Recommended)

---

## **const**

JavaScript-e `const` keyword use kore variable (constant) declare kora hoy.

### Features:

- Declaration-er somoy value assign korte hoy.
- Later variable reassign kora jay na.
- Same scope-e redeclare kora jay na.
- `const` block scope-ke respect kore.
- Jodi object ba array hoy, tahole tar vitore thaka data modify kora jay, kintu puro object/array reassign kora jay na.

```javascript
const PI = 3.1416;
```

---

## **let**

JavaScript-e `let` keyword use kore variable declare kora hoy.

### Features:

- Later value change (reassign) kora jay.
- Same scope-e redeclare kora jay na.
- `let` block scope-ke respect kore.
- Modern JavaScript-e change hote pare emon variable declare korar jonno `let` use kora hoy.

```javascript
let age = 20;

age = 21; // ✅ Allowed
```

---

## **var**

JavaScript-e `var` keyword use koreo variable declare kora jay.

### Features:

- Later value change (reassign) kora jay.
- Same scope-e redeclare kora jay.
- `var` block scoped na, function scoped.
- Hoisting-er karone declaration agei memory-te chole jay ebong initial value `undefined` hoy.
- Modern JavaScript-e `var` use na kore `let` ba `const` use kora best practice.

```javascript
var name = "Siam";
```

---

## **Without Keyword (Not Recommended)**

JavaScript-e (non-strict mode-e) keyword charao shudhu variable-er naam diye variable declare kora jay.

```javascript
x = 100;
```

Eta automatically global variable create korte pare, ja unexpected bug create korte pare.

Strict mode (`"use strict"`) use korle eta `ReferenceError` throw korbe.

Tai kono somoy keyword chara variable declare kora uchit na.

---

## **Which One Should You Use?**

- Value change hobe na → **`const`** ✅ (First Choice)
- Value change hote pare → **`let`** ✅
- **`var`** → Avoid (Legacy JavaScript)
- **Without keyword** → Never use

---

## **Summary**

| Keyword         | Reassign | Redeclare | Scope                    | Hoisted              |
| --------------- | -------- | --------- | ------------------------ | -------------------- |
| `const`         | ❌ No    | ❌ No     | Block Scope              | ✅ Yes (TDZ)         |
| `let`           | ✅ Yes   | ❌ No     | Block Scope              | ✅ Yes (TDZ)         |
| `var`           | ✅ Yes   | ✅ Yes    | Function Scope           | ✅ Yes (`undefined`) |
| Without Keyword | ✅ Yes   | ✅ Yes    | Global (Non-Strict Mode) | N/A                  |
