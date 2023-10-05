import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { gql } from "@apollo/client";
import { registerUserMutation } from "../Graphql/Mutations";
import client from "../Graphql/Apollo";


//Create an async thunk to fetch Graphql data
export const fetchGraphQlData = createAsyncThunk('graphql/fetchData', registerUser =
    async () => {

        const {
            userName,
            email,
            firstName,
            lastName,
            birthDate,
            esportsArenaId,
            eTeam,
            rank,
            country,
        } = registerUser
        try {
            //Fetch your GraphQl data here using your GraphQl Client (e Apollo Client)
            const response = await client.mutate({
                mutation: gql`
                mutation registerUser($input: RegisterInput){
                    registerUser:registerUser(input: $input){
                        _id
                        firstName
                        lastName
                        birthDate
                        email
                        rank
                        isProPlayer
                        passwordVerificationToken
                        createdAt
                        updatedAt
                        verificationToken
                        roles
                        country
                        esportsArenaId
                        eTeam
                    }
                }
            `,
            });

            const input = {
                userName,
                email,
                firstName,
                lastName,
                birthDate,
                esportsArenaId,
                eTeam,
                rank,
                country,
            }

            const { data } = await client.mutate({
                mutation: registerUserMutation,
                variables: {
                    input: registerUser,
                },
            });

            console.log("Success: ", input);
        } catch (error) {
            console.error('Registrations error', error);
        }
    });

const registerUserSlice = createSlice({
    name: 'registerUser',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },

    reducers: {
        registerUserRequest: (state) => {
            state.loading = true;
            state.data = null;
            state.error = null;
        },

        registerUserSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
            state.error = null;
        },

        registerUserFailed: (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchGraphQlData.pending, (state) => {
    //             state.loading = true;
    //         })

    //         .addCase(fetchGraphQlData.fulfilled, (state, action) => {
    //             state.loading = false;
    //             state.data = action.payload; //Use Optional chaining
    //             state.error = null;
    //         })

    //         .addCase(fetchGraphQlData.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.error.message;
    //         });
    // },
});

// export const registerUserReducer = registerUserSlice.reducer;
export const { registerUserRequest, registerUserSuccess, registerUserFailed } = registerUserSlice.actions;;
export default registerUserSlice.reducer;



