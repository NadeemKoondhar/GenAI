/*Task # 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

*/

function large_shirt(size: string = `"Large"`, message: string = `I Love TypeScript`) {
  console.log(`\t${size}\n${message}\n`);
};

large_shirt(); // default size and message
large_shirt(`"Medium"`); // medium size and default message
large_shirt(`"small"`, "Kid's also love TypeScript"); // small size and changed message