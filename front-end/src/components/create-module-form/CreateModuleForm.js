import React, { useState } from "react";
import "./create-module-form.styles.css";
import { useForm } from "react-hook-form";
import CustomButton from "../custom-button/CustomButton";

const CreateModuleForm = () => {
	const { register, handleSubmit, errors } = useForm();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const onSubmithandler = (e) => {
		console.log(formData);
		e.preventDefault();
	};
	const onChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div className="create-module-form">
			<form onSubmit={handleSubmit(onSubmithandler)}>
				<input
					type="text"
					name="title"
					ref={register({ required: true })}
					placeholder="Course Title"
					onChange={onChangeHandler}
				/>
				{errors.title && "title require"}
				<input
					type="text"
					name="thumbnail"
					ref={register({ required: true })}
					placeholder="Thumbnail Link"
					onChange={onChangeHandler}
				/>
				{errors.thumbnail && "thumbnail require"}
				<input
					type="text"
					name="price"
					ref={register({ required: true })}
					placeholder="Price"
					onChange={onChangeHandler}
				/>
				{errors.price && "Price require"}
				<input
					type="text"
					name="author"
					ref={register({ required: true })}
					placeholder="Author"
					onChange={onChangeHandler}
				/>
				{errors.author && "author require"}
				<textarea
					name="description"
					rows="3"
					ref={register({ required: true })}
					placeholder="Description in Bangle"
					onChange={onChangeHandler}></textarea>
				{errors.description && "description require"}
				<CustomButton type="submit">Add Module</CustomButton>
			</form>
		</div>
	);
};

export default CreateModuleForm;