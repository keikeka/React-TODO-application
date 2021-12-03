import React, { useState } from "react";
import PropTypes from "prop-types";
import Items from "./Items.jsx";
import todolistimage from "../../img/todolistimage.jpg";

//Component
const InputList = props => {
	//Hooks
	const [inputItem, setinputItem] = useState("");
	const [list, setList] = useState([]);

	//Methods
	//Function to check and add task
	const validateTask = () => {
		let newObject = {
			label: inputItem,
			done: false
		};
		let newList = list.concat([newObject]);
		setList(newList);
	};

	//Function to delete task
	const deleteTask = item => {
		let deleteItem = [...list];
		deleteItem.splice(item, 1);
		setList(deleteItem);
	};
	
	return (
		<>
			<div className="container ">
				<div className="shadow-lg p-3 mb-5 bg-body rounded">
					<img
						src={todolistimage}
						className="rounded mx-auto d-block"
						alt="task list cover picture"
					/>
					<h1 className="text-center text-danger">
						My christmas to-do list
					</h1>

					<button
						onClick={deleteTask}
						className="btn btn-dark float-end mx-2 p-2"
						type="button"
						role="button">
						Delete Task
					</button>
					<button
						onClick={validateTask}
						className="btn btn-success float-end mx-2 p-2"
						type="button"
						role="button">
						Add Task
					</button>

					<input
						className="form-control"
						type="text"
						placeholder={props.placeholder}
						onChange={e => setinputItem(e.target.value)}
						value={inputItem}
					/>
					<ul>
						{list.map((value, i) => (
							<Items key={i} name={value.label} />
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

InputList.propTypes = {
	placeholder: PropTypes.string
};

export default InputList;
