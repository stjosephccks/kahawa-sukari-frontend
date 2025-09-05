const {Schema, models, model} = require("mongoose");

const BulletinSchema = new Schema({
    title: { type: String, required: true },
    slug: { 
        type: String, 
        unique: true,
        sparse: true // Allow null values but ensure uniqueness when present
    },
    content: { type: String, required: true },
    description: { type: String },
    excerpt: { type: String }, // Short summary for blog-like display
    featuredImage: { type: String }, // Main image for the bulletin
    images: { type: [String], default: [] }, // Additional images
    inlineImages: [{
        url: { type: String },
        alt: { type: String },
        caption: { type: String },
        position: { type: Number } // For ordering inline images
    }],
    sections: {
        type: [String],
        enum: ["YCA", "YSC", "CJPD", "MATRIMONY", "CHATECHISIS"],
        default: []
    },
    author: {
        name: { type: String, default: 'Admin' },
        email: { type: String }
    },
    published: {
        type: Boolean,
        default: false,
        required: true
    },
    publishedAt: { type: Date },
    readingTime: { type: Number }, // Estimated reading time in minutes
    tags: { type: [String], default: [] }, // For categorization
    views: { type: Number, default: 0 },
    featured: { type: Boolean, default: false } // For highlighting important bulletins
}, {
    timestamps: true
});


// Add indexes for better query performance
BulletinSchema.index({ published: 1, publishedAt: -1 });
BulletinSchema.index({ slug: 1 });
BulletinSchema.index({ sections: 1 });
BulletinSchema.index({ tags: 1 });

const Bulletin = models?.Bulletin || model('Bulletin', BulletinSchema);

export default Bulletin;