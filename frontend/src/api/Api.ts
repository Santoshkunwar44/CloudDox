import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"http://localhost:8000/api",
    withCredentials:true

})


type createMasterCategoryApiArgType={
    name:string,
    
}


// bundle endpoints
export const createMasterCategoryApi=(payload)=>axiosInstance.post("/bundle/create",payload)
export const fetchAllLibraryCategoryApi=()=>axiosInstance.get("/bundle");
export const fetchBundlebyIdApi=(id:string) =>axiosInstance.get(`/bundle/${id}`)



// file endpoint

export const createFileApi=(payload)=>axiosInstance.post("/file/create",payload)
export const fetchFileByIdApi=(id:string)=>axiosInstance.get(`/file/${id}`)
export const getFilesByGroupApi=(id:string)=>axiosInstance.get(`/file/byGroup/${id}`)

// group point 
export const createGroupApi=(payload)=>axiosInstance.post("/group/create",payload)
export const getGroupByBundleApi=(bundleId:string)=>axiosInstance.get(`/group/byBundle/${bundleId}`)


// resource
export const createResourceApi=(payload)=>axiosInstance.post("/resource/create",payload)

// upload 

export const uploadImageApi=(url:string|ArrayBuffer)=>axiosInstance.post("/resource/upload/image",{data:url})
export const uploadVideoApi=(url:string|ArrayBuffer)=>axiosInstance.post("/resource/upload/video",{data:url})



// auth 

export const loginApi=(payload)=>axiosInstance.post(`/auth/login`,payload)
export const registerApi=(payload)=>axiosInstance.post(`/auth/register`,payload)

export const emailConfirmationApi=(token:string)=>axiosInstance.post(`/auth/email_confirmation/${token}`)

export const sentEmailToVerifyAccountApi=(email:string)=>axiosInstance.post("/auth/sent_verification_link",{email})
