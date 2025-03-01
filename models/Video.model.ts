import { model, models, Schema, Types } from "mongoose";


export const VIDEO_DIMENSTIONS = {
    width: 1080,
    height: 1920,
} as const;

export interface VideoIF {
    _id?: Types.ObjectId;
    title: string;
    description: string;
    videoUrl: string;
    controls?: boolean;
    transformation?: {
        height: number;
        width: number;
        quality?: number;
    };
    createdAt?: Date;
    updatedAt?: Date;
};

const videoSchema = new Schema<VideoIF>(
    {
        title:{
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        videoUrl: {
            type: String,
            required: true,
        },
        controls: {
            type: Boolean,
            default: true,
        },
        transformation: {
            height:{
                type: Number,
                default: VIDEO_DIMENSTIONS.height
            },
            width:{
                type: Number,
                default: VIDEO_DIMENSTIONS.width
            },
            quality: {
                type: Number,
                min: 1,
                max: 100
            }
        }
    },{
        timestamps: true
    }
)

const Video = models?.Video || model<VideoIF>("Video", videoSchema);

export default Video;