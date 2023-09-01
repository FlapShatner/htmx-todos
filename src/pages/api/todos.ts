import { XataClient } from '../../xata'
const xata = new XataClient({
 apiKey: import.meta.env.XATA_API_KEY,
 branch: import.meta.env.XATA_BRANCH,
})
export async function GET({ params, request }) {
 const todos = await xata.db.todos.getAll()

 return new Response(JSON.stringify(todos))
}
export async function DELETE({ params, request }) {
 const id = request.headers.get('HX-Trigger')
 const result = await xata.db.todos.delete(id)
 return new Response(null, { status: 200 })
}
