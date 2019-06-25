export default function(ctx: { store; redirect }) {
  console.log("hi middleware");
  console.log(Object.keys(ctx));
}
