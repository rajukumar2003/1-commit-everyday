import { Hono } from 'hono'

const app = new Hono()

async function authMiddlewar(c:any, next:any) {
  if (c.req.header('Authorization')) {
    // Do auth
    await next();
  }
  else {
    return c.text("You don't have access")
  };
};

app.get('/',authMiddlewar, async (c) => {
  // this c(context) contains both res and req
  // for request parameter c.text() or c.json()
  // body, headers, query parameters, middlewares, connecting to the database
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header('Authorization'));
  console.log(c.req.query('param'))
  return c.text('Hello Hono!')
});

export default app
