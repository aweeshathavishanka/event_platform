import mongoose, { Schema, Types, model, models } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description: string;
  location: Location;
  createdAt: Date;
  imageURL: string;
  startDateTime: Date;
  endDateTime: Date;
  price: string;
  isFree: boolean;
  url?: string;
  category: { _id: string; name: string };
  organizer: { _id: string; firstName: string ,lastName: string};
}

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imageURL: {
    type: Date,
    required: true,
  },
  startDateTime: {
    type: Date,
    default: Date.now,
  },
  endDateTime: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: String,
    default: Date.now,
  },
  isFree: {
    type: Boolean,
    default: false,
  },
  url: {
    type: Boolean,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  organizer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
