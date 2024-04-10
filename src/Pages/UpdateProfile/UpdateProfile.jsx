import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";
import { useForm, } from "react-hook-form"

const UpdateProfile = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        criteriaMode: "all",
        mode: "onChange"
    })

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <div>
                <Helmet>
                    <title>Update Profile</title>
                </Helmet>


                <div className="flex justify-center items-center mt-32 mb-24">
                    <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-primary-color border text-gray-700">
                        <h1 className="text-2xl font-bold text-center text-primary-color">Update Profile</h1>
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block text-gray-700">Your Name</label>
                                <input type="text" {...register('name', { required: true })} placeholder="Name" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                                {errors?.name?.types?.required && <p className="text-red-500">This field is required</p>}
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="photoUrl" className="block text-gray-700">Your Photo URL</label>
                                <input type="text" {...register("photoUrl", { required: true })} placeholder="URL" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                                {errors?.photoUrl?.types?.required && <p className="text-red-500">This field is required</p>}

                            </div>
                            <button className="block w-full p-3 text-center rounded-sm  bg-primary-color text-gray-100 hover:bg-secondary-color">Update</button>
                        </form>
                       
                       
                    </div>
                </div>


            </div>
        </div>
    );
};

export default UpdateProfile;