import React, { useState } from "react";
import {
	ScrollView,
	Text,
	View,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
	Image,
} from "react-native";

import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Formik } from "formik";
import * as yup from "yup";

import DefaultTextInput from "../../components/textinput";
import DefaultButton from "../../components/button";
import LoginIllustration from "../../assets/images/LoginIllustration.png";

const ValidationSchema = yup.object({
	username: yup.string().required("Please enter a username").min(3, "Username should be atleast 3 characters long"),
	password: yup.string().required("Please enter a password").min(8, "Password should be atleast 8 characters long"),
});

const Login = ({ navigation }) => {
	return (
		<Container>
			<Header>
				<Heading>Login to the Emergency App</Heading>
				<LoginIllustrationContainer source={LoginIllustration} />
			</Header>

			<LoginForm>
				<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<Formik
							validationSchema={ValidationSchema}
							initialValues={{
								username: "",
								password: "",
							}}
							onSubmit={(values) => {
								console.log(values);
								navigation.navigate("Admin Dashboard");
							}}>
							{({ handleChange, handleSubmit, values, touched, errors }) => (
								<View>
									<ErrorMessage>{touched.username && errors.username}</ErrorMessage>

									<DefaultTextInput
										autoCapitalize="none"
										saveState={handleChange("username")}
										value={values.username}
										placeholder="Username"
										keyboardType="default"
										maxLength={32}
									/>

									<ErrorMessage>{touched.password && errors.password}</ErrorMessage>

									<DefaultTextInput
										autoCapitalize="none"
										saveState={handleChange("password")}
										value={values.password}
										placeholder="Password"
										maxLength={32}
										secureTextEntry={true}
									/>

									<DefaultButton onPress={handleSubmit}>Login</DefaultButton>
								</View>
							)}
						</Formik>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</LoginForm>
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
	font-size: 24px;
`;

const LoginIllustrationContainer = styled.Image`
	margin: 25px 0;
`;

const LoginForm = styled.View`
	padding: 50px 0;
	width: 100%;
`;

const ErrorMessage = styled.Text`
	margin-bottom: 5px;
	margin-left: 25px;
	color: red;
	font-size: 14px;
`;

export default Login;
