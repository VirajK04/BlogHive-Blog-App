const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinymceKey : String(import.meta.env.VITE_TINYMCE_KEY),
    enableDemoLogin : import.meta.env.VITE_ENABLE_DEMO_LOGIN !== 'false',
    demoEmail : String(import.meta.env.VITE_DEMO_EMAIL || 'test@abc.com'),
    demoPassword : String(import.meta.env.VITE_DEMO_PASSWORD || 'Test@123')
}

export default conf