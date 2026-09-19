// How javaScript works?

// process between the Our JS Code and final output

// 1. Our JS Code 

// ==========================================================

// 2. Parsing
// JavaScript engine pehle code ko parse karta hai.
// Simple meaning:
// Parser code ko check karta hai aur samajhta hai ke code ka structure kya hai.
// Parsing ke andar mainly 2 important cheezen diagram mein hain:


// A. Lexical Analysis
// Code ko chhote meaningful pieces mein break karta hai, jinhein tokens kehte hain.

// For example:
// const age = 21;

// Tokens roughly:

// const
// age
// =
// 21
// ;

// Yani: Lexical parser → code ko tokens mein break karta hai.

// B Syntax Parser
// Ab engine check karta hai:
// Kya ye tokens JavaScript ke correct rules follow kar rahe hain?

// For example:

// ✅ Correct syntax.
// const age = 21;

// ❌ Syntax error.
// const = age 21;

// Syntax parser isi tarah code ki structure ko check karta hai.
// simply check whether the syntax is correct or not if it is correct (create AST Tree)


// ==========================================================

// 3 AST  (Abstract Syntax Tree)
// AST = JavaScript code ka structured/tree-like representation.
// Jab JavaScript engine code ko parse karta hai, to woh code ko samajhne ke liye uska 
// structure create karta hai. Isi structure ko AST kehte hain.

//           Code se AST tak ka flow
// JavaScript engine roughly is tarah code ko process karta hai:

// JavaScript Code
//        ↓
//     Tokens
//        ↓
//       AST
//        ↓
// Further processing / execution

// Example:
// const age = 21;
// Sabse pehle code ko smaller pieces, yani tokens, mein identify kiya jaata hai:

// const
// age
// =
// 21
// ;

// Phir parser in tokens ke relationships aur meaning ko samajhkar ek structured 
// representation banata hai  AST.


// AST ki zaroorat kyun hoti hai?

// Computer ke liye sirf ye dekhna enough nahi hai:
// const age = 21;

// Engine ko ye bhi samajhna hai:

// const se variable declare ho raha hai.
// Variable ka naam age hai.
// Variable ki value 21 hai.
// 21 ek numeric value hai.
// Ye poora code ek variable declaration statement hai.

// AST code ke in relationships ko structured form mein represent karta hai.

// Code:

// const age = 21;

// Conceptually AST kuch is type ka structure represent karega:

// VariableDeclaration
// │
// ├── kind: const
// │
// └── VariableDeclarator
//     │
//     ├── name: age
//     │
//     └── value: 21

// Ye sirf learning ke liye simplified representation hai. Actual AST mein aur bhi details/nodes ho sakte hain.


//  AST mein "Tree" kyun kaha jaata hai? 🌳
// AST ko tree isliye kaha jaata hai kyunki information hierarchical/parent-child structure mein organize hoti hai.

// Example:
// const age = 21;

// Simplified:

// VariableDeclaration
//        │
//        └── VariableDeclarator
//               ├── age
//               └── 21

// Yahan:

// VariableDeclaration
//         ↓
//       Parent
//         ↓
// VariableDeclarator
//       ↙     ↘
//     age      21

// Isliye iska naam Abstract Syntax Tree hai.


// ==========================================================

