import {atom} from 'recoil';

export const projectList = atom({
	key: "projectList",
	default: []
});

export const adminData = atom({
	key : "adminData",
	default: null
});


export const pageSlug = atom({
	key : "pageSlug",
	default: null,
})
