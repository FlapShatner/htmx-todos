import { XataClient } from './xata'
import type { SelectedPick, SelectableColumn, EditableData } from '@xata.io/client'
import type { TodosRecord } from './xata'

const xata = new XataClient()
const fields: SelectableColumn<TodosRecord>[] = ['id', 'completed', 'text']
export type Todo = EditableData<SelectedPick<TodosRecord, typeof fields>>
