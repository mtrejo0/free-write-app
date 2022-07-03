import { addDoc, collection, CollectionReference, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { Todo } from "../types/types";

export default class Todos {

  static db_name = "todos"

  static todosCollection = collection(db, this.db_name) as CollectionReference<Todo>

  static async add(task: string) {
    try {
      await addDoc(this.todosCollection, {
        task,
        done: false
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  static async delete(id: string) {
    await deleteDoc(doc(db, this.db_name, id))
  }

}


