export async function GET({ params, request }) {
 const todos = [
  { id: 1, title: 'Learn ABC', completed: false },
  { id: 2, title: 'Learn DEF', completed: false },
  { id: 3, title: 'Learn GHI', completed: false },
  { id: 4, title: 'Learn JKL', completed: false },
  { id: 5, title: 'Learn MNO', completed: false },
  { id: 6, title: 'Learn PQR', completed: false },
  { id: 7, title: 'Learn STU', completed: false },
  { id: 8, title: 'Learn VWX', completed: false },
  { id: 9, title: 'Learn YZ', completed: false },
 ]
 return new Response(JSON.stringify(todos))
}
