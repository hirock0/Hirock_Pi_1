"use client"
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'
import toast from 'react-hot-toast'

interface FormData{
    projectTitle:string,
    projectImage:string,
    projectDescriptions:string,
    projectLink:string,
    recentDate:string,
    category:string

    
}


const Upload_projectsPage = () => {

    const[image,setImage]=useState<string>("")

    const {register,setValue, reset, handleSubmit,formState:{errors}}=useForm<FormData>()
    
    const onUploadProject:SubmitHandler<FormData> = async(data)=>{
        try{
       
            data.projectImage = image
            data.recentDate =  new Date().toLocaleDateString()
            const response = await axios.post("/pages/api/project_upload",data)
            if(response?.data.success){
                toast.success("upload successful!")
                reset()
                setImage("")
            }else{
                toast.success("upload failed!")
            }
        }catch(error:any){
            throw new Error("Something went wrong!",error)
        }


    }

    const onBase64 = (file:any)=>{

        try{
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload=(result:any)=>{
                setImage(result?.target?.result)
            }
            reader.onerror=(errors)=>{
                console.log(errors)
            }
        }catch(error:any){
            throw new Error(error)
        }


    }

    return (
        <main className=" bg-white text-black">
            <div className=" container mx-auto px-5 h-screen pt-5 ">
                <h1 className=" text-center text-3xl font-semibold ">Upload Projects</h1>
                <div className=" flex justify-center mt-5">
                    <form onSubmit={handleSubmit((data)=>onUploadProject(data))} className=" w-1/2 max-md:w-full">
                        <div className="">
                            <h1>Project Title</h1>
                            <input {...register("projectTitle",{required:"Need to fill it!"})} type="text" name='projectTitle' placeholder="Project Title" className="h-10 bg-transparent outline-none  border-b-2 rounded-lg focus:h-12 w-full" />
                            {errors.projectTitle && <h1 className=' text-sm text-red-600'>{errors.projectTitle.message}</h1>}
                        </div>

                        <div className=" mt-5">
                            <h1>Project Descriptions</h1>
                            <textarea {...register("projectDescriptions",{required:"Need to fill it!"})} name="projectDescriptions" placeholder="Project Descriptions" className="h-10 bg-transparent outline-none  border-b-2 rounded-lg focus:h-52 w-full" >

                            </textarea>
                            {errors.projectDescriptions && <h1 className=' text-sm text-red-600'>{errors.projectDescriptions.message}</h1>}
                
                        </div>
                        <div className=" mt-5">
                            <h1>Project Link</h1>
                            <input {...register("projectLink",{required:"Need to fill it!"})} type="text" name='projectLink' placeholder="Project Link" className="h-10 bg-transparent outline-none  border-b-2 rounded-lg focus:h-12 w-full" />
                            {errors.projectLink && <h1 className=' text-sm text-red-600'>{errors.projectLink.message}</h1>}
                        </div>
                        <div className=" mt-5">
                            <h1>Category</h1>
                            <select {...register("category",{required:"Need to fill it!"})} name='category' className="h-10 bg-transparent outline-none  border-b-2 rounded-lg  w-full" >
                                <option value="">Select Category</option>
                                <option value="full_stack">Full Stack</option>
                                <option value="frontend">Frontend</option>
                            </select>

                            {errors.projectLink && <h1 className=' text-sm text-red-600'>{errors.projectLink.message}</h1>}
                        </div>
                        <div className=" mt-5">
                            <h1>Project Image URL</h1>
                            <input onChange={(e:any)=>onBase64(e.target.files[0])}  type="file" accept='image/*' name='projectImage' placeholder="Project Image URL" className="h-10 bg-transparent outline-none  border-b-2 rounded-lg focus:h-12 w-full pl-2" />
                        </div>
                        <div className="">
                            <Image src={image.toString()} alt='peoject' width={100} height={100} className={`${image == ""?" hidden":" block"}`}/>
                        </div>
                        <div className=" mt-5">
                            <button disabled={image == ""?true:false} className=" btn btn-primary w-full">upload</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Upload_projectsPage
