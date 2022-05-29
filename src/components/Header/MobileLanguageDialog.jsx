import React from 'react';

//Utils
import { updateLanguage } from '../../utils/languageUtils'; //Set new language


//react-18next
import { useTranslation } from 'react-i18next';


//MATERIAL DESIGN
//Components
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
//Styled
import { styled } from '@mui/material/styles';


const LanguageItem = styled(ListItemText)({
	textAlign: "center"
});

//Main component content
const MobileLanguageDialog = ({closeDialog}) => {

	//react-i18next
	const [ t, i18n ] = useTranslation("global");


	const languagesLabels = [
		t("header.languageDialog.english.label"),
		t("header.languageDialog.spanish.label")
	]

	const languageValues = [
		t("header.languageDialog.english.value"),
		t("header.languageDialog.spanish.value")
	];


	//Changes language of website
	const changeLanguage = (event) => {
		const lang = event.currentTarget.getAttribute("lang")

		updateLanguage(lang);
		i18n.changeLanguage(lang);
		closeDialog();
	};


	//Component render
	return (
		<>
			<DialogTitle>{t("header.languageDialog.title")}</DialogTitle>
			<List>
				{languagesLabels.map( (element, index) => (
					<ListItem key={index} disablePadding >
						<ListItemButton lang={languageValues[index]} onClick={changeLanguage}>
							<LanguageItem primary={element} />
						</ListItemButton>
					</ListItem>
				) )}
			</List>
		</>
	);
};


export default MobileLanguageDialog; //Export main component
