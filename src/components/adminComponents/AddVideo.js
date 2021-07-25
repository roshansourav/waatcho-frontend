import axios from 'axios';
import React, { Component } from 'react';
import ModalSuccess from './ModalSuccess';
import "./addvideo.css";


class AddVideo extends Component {


	state = {

		// Initially, no file is selected
		selectedFile: null
	};

	// On file select (from the pop up)
	onFileChange = event => {

		// Update the state
		this.setState({ selectedFile: event.target.files[0] });

	};

	// On file upload (click the upload button)
	onFileUpload = () => {

		// Create an object of formData
		const formData = new FormData();

		// Update the formData object
		formData.append(
			"file",
			this.state.selectedFile
		);

		// Details of the uploaded file
		console.log(this.state.selectedFile);
		<ModalSuccess />

		function refreshPage() {
			window.location.reload();
		}






		// Request made to the backend api
		// Send formData object
		axios.post("http://localhost:8080/uploadFile", formData).then(() => {
			this.setState({
				selectedFile: null
			});
			window.alert("Uploaded Successfully");
			refreshPage();
		});
	};



	// File content to be displayed after
	// file upload is complete
	fileData = () => {

		if (this.state.selectedFile) {

			return (
				<div>
					<h5>File Details:</h5>

					<p className="card-text">File Name: {this.state.selectedFile.name}</p>


					<p className="card-text">File Type: {this.state.selectedFile.type}</p>




				</div>
			);
		} else {
			return (
				<div>
					<br />
					<h4>Choose before Pressing the Upload button</h4>
				</div>
			);
		}
	};


	render() {


		return (


			<div class="card text-center">
				<div class="card-header">
					Upload
				</div>
				<div class="card-body">
					<h5 class="card-title">Upload New Video File Here</h5>
					<input className="form-control" type="file" onChange={this.onFileChange} />
					<br />
					<button onClick={this.onFileUpload}>
						Upload!
					</button>
				</div>
				<div class="card-footer text-muted">
					{this.fileData()}
				</div>
			</div>

			// <div className="container text-center">

			// 	<h3>
			// 		Upload New Video File Here
			// 	</h3>
			// 	<div>
			// 		<input type="file" onChange={this.onFileChange} />
			// 		<button onClick={this.onFileUpload}>
			// 			Upload!
			// 		</button>
			// 	</div>
			// 	{this.fileData()}


			// </div>
		);
	}
}

export default AddVideo;
