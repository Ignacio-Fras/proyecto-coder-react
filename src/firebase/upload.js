import {db} from './config.js'
import MOCK_DATA from '../components/data/MOCK_DATA.json' assert {type: "json" }
import { collection, addDoc } from 'firebase/firestore'

MOCK_DATA.forEach(item => delete item.id)

const productosRef = collection(db, 'productos')

MOCK_DATA.forEach(item => {
    addDoc(productosRef, item)
})