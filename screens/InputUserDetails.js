import React from "react";
import {
	ScrollView,
	View,
	Text,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
	Image,
} from "react-native";

import styled from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Formik } from "formik";
import * as yup from "yup";

import DefaultTextInput from "../components/textinput";
import DefaultButton from "../components/button";

const ValidationSchema = yup.object({
	name: yup.string().required("Please enter your name"),
	email: yup.string().required("Please enter your email").email("Please enter a valid email address"),
	contact: yup
		.string()
		.required("Please enter your contact")
		.test("isValidContact", "Please enter a valid contact", (value) => {
			return parseInt(value) !== 10;
		}),
});

const InputUserDetails = ({ route, navigation }) => {
	const capturedImage = route.params.capturedImage.uri;
	console.log(capturedImage);

	return (
		<Container>
			<Header>
				<Heading>User Details</Heading>
			</Header>
			<Form>
				<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<Formik
							validationSchema={ValidationSchema}
							initialValues={{
								name: "",
								contact: "",
								email: "",
							}}
							onSubmit={(values) => {
								console.log(values);
								navigation.navigate("Input User Detail Successful");
							}}>
							{({ handleChange, handleSubmit, values, touched, errors }) => (
								<View>
									<ErrorMessage>{touched.name && errors.name}</ErrorMessage>
									<DefaultTextInput
										autoCapitalize="words"
										saveState={handleChange("name")}
										value={values.name}
										placeholder="Name"
										maxLength={32}
									/>

									<ErrorMessage>{touched.contact && errors.contact}</ErrorMessage>
									<DefaultTextInput
										autoCapitalize="none"
										saveState={handleChange("contact")}
										value={values.contact}
										placeholder="contact"
										keyboardType="numeric"
										maxLength={10}
									/>

									<ErrorMessage>{touched.email && errors.email}</ErrorMessage>
									<DefaultTextInput
										autoCapitalize="none"
										saveState={handleChange("email")}
										value={values.email}
										placeholder="email"
										keyboardType="email-address"
										maxLength={32}
									/>

									<DefaultButton onPress={handleSubmit}>Submit</DefaultButton>
								</View>
							)}
						</Formik>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</Form>
		</Container>
	);
};

const Container = styled.ScrollView`
	flex: 1;
	padding: 50px 15px;
`;

const Header = styled.View`
	align-items: center;
	padding: 50px 0;
`;

const Heading = styled.Text`
	margin-bottom: 25px;
	font-size: 28px;
	text-align: center;
`;

const SelectedImage = styled.Text`
	margin: 25px;
	font-size: 14px;
	text-align: center;
`;

const Form = styled.View`
	padding: 50px 0;
	width: 100%;
`;

const ErrorMessage = styled.Text`
	margin-bottom: 5px;
	margin-left: 25px;
	color: red;
	font-size: 14px;
`;

export default InputUserDetails;
