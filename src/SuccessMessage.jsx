import React from "react";
import Icon from "./Common/Icon";

const SuccessMessage = ({
	successMessage,
	setSuccessMessage,
	setDidDeletePost,
	setDidCreatePost,
	setDidEditPost,
}) => {
	const resetSuccessMessageModal = () => {
		setDidCreatePost(false);
		setDidEditPost(false);
		setDidDeletePost(false);
		setSuccessMessage("");
	};

	return (
		<div className='success_message_wrapper animate__animated animate__slideInLeft animate__faster'>
			<div className='check_message_close'>
				<div className='check_and_message'>
					<Icon name='fas fa-check-circle icon' />
					<div className='message'>{successMessage}</div>
				</div>
				<div className='close' onClick={resetSuccessMessageModal}>
					<Icon name='fas fa-times' />
				</div>
			</div>
		</div>
	);
};

export default SuccessMessage;
