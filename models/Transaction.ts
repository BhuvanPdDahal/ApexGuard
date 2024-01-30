import { Schema, model, models } from "mongoose";

enum Types {
    income = 'income',
    expense = 'expense'
}

const TransactionSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minlength: [3, 'Title should be 3 or more characters long']
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required!']
    },
    date: {
        type: String,
        required: [true, 'Date is required!']
    },
    type: {
        type: Types,
        required: true
    },
    comment: {
        type: String,
        required: [true, 'Comment is required!'],
        minlength: [10, 'Comment should be 10 or more characters long']
    }
});

const Transaction = models.Transaction || model('Transaction', TransactionSchema);
export default Transaction;