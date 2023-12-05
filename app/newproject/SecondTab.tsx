"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { IoFileTray } from "react-icons/io5"
import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone';

type SecondTabProps = {
    currentStep: number;
    updateCurrentStep: (newStep: number) => void;
};

const SecondTab: React.FC<SecondTabProps> = ({currentStep, updateCurrentStep}) => {
    const [file, setFile] = useState<File | undefined>();


    const onDrop = useCallback((acceptedFiles: Array<File>) => {
        const file = new FileReader;

        file.onload = function () {
            //   setPreview(file.result);
        }

        file.readAsDataURL(acceptedFiles[0])
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateCurrentStep(currentStep + 1);
    };

    return (
        <div>
            <div className='flex flex-col gap-5'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <p className='text-xl font-semibold'>
                        Upload Your Executable File
                    </p>
                    <div className='w-[70vh] h-[30vh] border-4 border-c border-dashed border-neutral-400 rounded-xl flex flex-col justify-center items-center' {...getRootProps()}>

                        <input {...getInputProps()} required/>
                        <span className='text-5xl'><IoFileTray /></span>
                        {
                            isDragActive ?
                                <p>Drop the files here ...</p> :
                                <p>Drop your executable file here, or click to select files</p>
                        }
                    </div>
                    <label className='flex flex-col gap-1 text-xm w-[70vh]'>
                        Release version *
                        <Input type="text"
                            name="organization"
                            // value={formData.organization}
                            // onChange={handleInputChange}
                            required className='bg-neutral-100 text-base' />
                    </label>
                <div className='ml-auto flex gap-5 pt-5'>
                    <Button onClick={() => updateCurrentStep(currentStep - 1)} variant={'outline'} className='w-fit'>Prev</Button>
                    <Button type='submit' className='w-fit'>Next</Button>
                </div>
                </form>
            </div>
        </div>
    )
}

export { SecondTab }