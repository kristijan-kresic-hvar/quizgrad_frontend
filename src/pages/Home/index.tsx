import {
	StyledHeader,
	StyledHeading,
	StyledHeroImg,
	StyledBlockQuote,
	StyledSectionLeft,
	StyledCtaButton,
} from './styled';
import { StyledFlexRow } from '../../shared/styled';
import heroPNG from '../../assets/img/hero.png';

const Home = () => {
	return (
		<StyledHeader>
			<StyledSectionLeft>
				<StyledHeading>
					Learn
					<br /> new concepts
					<br /> for each question
				</StyledHeading>
				<StyledBlockQuote>We help you prepare for exams and quizes</StyledBlockQuote>
				<StyledFlexRow mt={2.5}>
					<StyledCtaButton>Get Started</StyledCtaButton>
				</StyledFlexRow>
			</StyledSectionLeft>
			<StyledHeroImg src={heroPNG} alt="hero" />
		</StyledHeader>
	);
};

export default Home;
