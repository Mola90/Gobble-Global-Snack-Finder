const { Country } = require('../Models');

const countryData = [
    { country_name: 'Afghanistan', country_emoji: '🇦🇫' },
    { country_name: 'Albania', country_emoji: '🇦🇱' },
    { country_name: 'Algeria', country_emoji: '🇩🇿' },
    { country_name: 'Andorra', country_emoji: '🇦🇩' },
    { country_name: 'Angola', country_emoji: '🇦🇴' },
    { country_name: 'Antigua and Barbuda', country_emoji: '🇦🇬' },
    { country_name: 'Argentina', country_emoji: '🇦🇷' },
    { country_name: 'Armenia', country_emoji: '🇦🇲' },
    { country_name: 'Australia', country_emoji: '🇦🇺' },
    { country_name: 'Austria', country_emoji: '🇦🇹' },
    { country_name: 'Azerbaijan', country_emoji: '🇦🇿' },
    { country_name: 'Bahamas', country_emoji: '🇧🇸' },
    { country_name: 'Bahrain', country_emoji: '🇧🇭' },
    { country_name: 'Bangladesh', country_emoji: '🇧🇩' },
    { country_name: 'Barbados', country_emoji: '🇧🇧' },
    { country_name: 'Belarus', country_emoji: '🇧🇾' },
    { country_name: 'Belgium', country_emoji: '🇧🇪' },
    { country_name: 'Belize', country_emoji: '🇧🇿' },
    { country_name: 'Benin', country_emoji: '🇧🇯' },
    { country_name: 'Bhutan', country_emoji: '🇧🇹' },
    { country_name: 'Bolivia', country_emoji: '🇧🇴' },
    { country_name: 'Bosnia and Herzegovina', country_emoji: '🇧🇦' },
    { country_name: 'Botswana', country_emoji: '🇧🇼' },
    { country_name: 'Brazil', country_emoji: '🇧🇷' },
    { country_name: 'Brunei', country_emoji: '🇧🇳' },
    { country_name: 'Bulgaria', country_emoji: '🇧🇬' },
    { country_name: 'Burkina Faso', country_emoji: '🇧🇫' },
    { country_name: 'Burundi', country_emoji: '🇧🇮' },
    { country_name: 'Cabo Verde', country_emoji: '🇨🇻' },
    { country_name: 'Cambodia', country_emoji: '🇰🇭' },
    { country_name: 'Cameroon', country_emoji: '🇨🇲' },
    { country_name: 'Canada', country_emoji: '🇨🇦' },
    { country_name: 'Central African Republic', country_emoji: '🇨🇫' },
    { country_name: 'Chad', country_emoji: '🇹🇩' },
    { country_name: 'Chile', country_emoji: '🇨🇱' },
    { country_name: 'China', country_emoji: '🇨🇳' },
    { country_name: 'Colombia', country_emoji: '🇨🇴' },
    { country_name: 'Comoros', country_emoji: '🇰🇲' },
    { country_name: 'Congo', country_emoji: '🇨🇬' },
    { country_name: 'Costa Rica', country_emoji: '🇨🇷' },
    { country_name: 'Croatia', country_emoji: '🇭🇷' },
    { country_name: 'Cuba', country_emoji: '🇨🇺' },
    { country_name: 'Cyprus', country_emoji: '🇨🇾' },
    { country_name: 'Czech Republic', country_emoji: '🇨🇿' },
    { country_name: 'Democratic Republic of the Congo', country_emoji: '🇨🇩' },
    { country_name: 'Denmark', country_emoji: '🇩🇰' },
    { country_name: 'Djibouti', country_emoji: '🇩🇯' },
    { country_name: 'Dominica', country_emoji: '🇩🇲' },
    { country_name: 'Dominican Republic', country_emoji: '🇩🇴' },
    { country_name: 'East Timor', country_emoji: '🇹🇱' },
    { country_name: 'Ecuador', country_emoji: '🇪🇨' },
    { country_name: 'Egypt', country_emoji: '🇪🇬' },
    { country_name: 'El Salvador', country_emoji: '🇸🇻' },
    { country_name: 'Equatorial Guinea', country_emoji: '🇬🇶' },
    { country_name: 'Eritrea', country_emoji: '🇪🇷' },
    { country_name: 'Estonia', country_emoji: '🇪🇪' },
    { country_name: 'Eswatini', country_emoji: '🇸🇿' },
    { country_name: 'Ethiopia', country_emoji: '🇪🇹' },
    { country_name: 'Fiji', country_emoji: '🇫🇯' },
    { country_name: 'Finland', country_emoji: '🇫🇮' },
    { country_name: 'France', country_emoji: '🇫🇷' },
    { country_name: 'Gabon', country_emoji: '🇬🇦' },
    { country_name: 'Gambia', country_emoji: '🇬🇲' },
    { country_name: 'Georgia', country_emoji: '🇬🇪' },
    { country_name: 'Germany', country_emoji: '🇩🇪' },
    { country_name: 'Ghana', country_emoji: '🇬🇭' },
    { country_name: 'Greece', country_emoji: '🇬🇷' },
    { country_name: 'Grenada', country_emoji: '🇬🇩' },
    { country_name: 'Guatemala', country_emoji: '🇬🇹' },
    { country_name: 'Guinea', country_emoji: '🇬🇳' },
    { country_name: 'Guinea-Bissau', country_emoji: '🇬🇼' },
    { country_name: 'Guyana', country_emoji: '🇬🇾' },
    { country_name: 'Haiti', country_emoji: '🇭🇹' },
    { country_name: 'Honduras', country_emoji: '🇭🇳' },
    { country_name: 'Hungary', country_emoji: '🇭🇺' },
    { country_name: 'Iceland', country_emoji: '🇮🇸' },
    { country_name: 'India', country_emoji: '🇮🇳' },
    { country_name: 'Indonesia', country_emoji: '🇮🇩' },
    { country_name: 'Iran', country_emoji: '🇮🇷' },
    { country_name: 'Iraq', country_emoji: '🇮🇶' },
    { country_name: 'Ireland', country_emoji: '🇮🇪' },
    { country_name: 'Israel', country_emoji: '🇮🇱' },
    { country_name: 'Italy', country_emoji: '🇮🇹' },
    { country_name: 'Jamaica', country_emoji: '🇯🇲' },
    { country_name: 'Japan', country_emoji: '🇯🇵' },
    { country_name: 'Jordan', country_emoji: '🇯🇴' },
    { country_name: 'Kazakhstan', country_emoji: '🇰🇿' },
    { country_name: 'Kenya', country_emoji: '🇰🇪' },
    { country_name: 'Kiribati', country_emoji: '🇰🇮' },
    { country_name: 'Kuwait', country_emoji: '🇰🇼' },
    { country_name: 'Kyrgyzstan', country_emoji: '🇰🇬' },
    { country_name: 'Laos', country_emoji: '🇱🇦' },
    { country_name: 'Latvia', country_emoji: '🇱🇻' },
    { country_name: 'Lebanon', country_emoji: '🇱🇧' },
    { country_name: 'Lesotho', country_emoji: '🇱🇸' },
    { country_name: 'Liberia', country_emoji: '🇱🇷' },
    { country_name: 'Libya', country_emoji: '🇱🇾' },
    { country_name: 'Liechtenstein', country_emoji: '🇱🇮' },
    { country_name: 'Lithuania', country_emoji: '🇱🇹' },
    { country_name: 'Luxembourg', country_emoji: '🇱🇺' },
    { country_name: 'Madagascar', country_emoji: '🇲🇬' },
    { country_name: 'Malawi', country_emoji: '🇲🇼'},
    { country_name: 'Malaysia', country_emoji: '🇲🇾' },
    { country_name: 'Maldives', country_emoji: '🇲🇻' },
    { country_name: 'Mali', country_emoji: '🇲🇱' },
    { country_name: 'Malta', country_emoji: '🇲🇹' },
    { country_name: 'Marshall Islands', country_emoji: '🇲🇭' },
    { country_name: 'Mauritania', country_emoji: '🇲🇷' },
    { country_name: 'Mauritius', country_emoji: '🇲🇺' },
    { country_name: 'Mexico', country_emoji: '🇲🇽' },
    { country_name: 'Micronesia', country_emoji: '🇫🇲' },
    { country_name: 'Moldova', country_emoji: '🇲🇩' },
    { country_name: 'Monaco', country_emoji: '🇲🇨' },
    { country_name: 'Mongolia', country_emoji: '🇲🇳' },
    { country_name: 'Montenegro', country_emoji: '🇲🇪' },
    { country_name: 'Morocco', country_emoji: '🇲🇦' },
    { country_name: 'Mozambique', country_emoji: '🇲🇿' },
    { country_name: 'Myanmar', country_emoji: '🇲🇲' },
    { country_name: 'Namibia', country_emoji: '🇳🇦' },
    { country_name: 'Nauru', country_emoji: '🇳🇷' },
    { country_name: 'Nepal', country_emoji: '🇳🇵' },
    { country_name: 'Netherlands', country_emoji: '🇳🇱' },
    { country_name: 'New Zealand', country_emoji: '🇳🇿' },
    { country_name: 'Nicaragua', country_emoji: '🇳🇮' },
    { country_name: 'Niger', country_emoji: '🇳🇪' },
    { country_name: 'Nigeria', country_emoji: '🇳🇬' },
    { country_name: 'North Korea', country_emoji: '🇰🇵' },
    { country_name: 'North Macedonia', country_emoji: '🇲🇰' },
    { country_name: 'Norway', country_emoji: '🇳🇴' },
    { country_name: 'Oman', country_emoji: '🇴🇲' },
    { country_name: 'Pakistan', country_emoji: '🇵🇰' },
    { country_name: 'Palau', country_emoji: '🇵🇼' },
    { country_name: 'Palestine', country_emoji: '🇵🇸' },
    { country_name: 'Panama', country_emoji: '🇵🇦' },
    { country_name: 'Papua New Guinea', country_emoji: '🇵🇬' },
    { country_name: 'Paraguay', country_emoji: '🇵🇾' },
    { country_name: 'Peru', country_emoji: '🇵🇪' },
    { country_name: 'Philippines', country_emoji: '🇵🇭' },
    { country_name: 'Poland', country_emoji: '🇵🇱' },
    { country_name: 'Portugal', country_emoji: '🇵🇹' },
    { country_name: 'Qatar', country_emoji: '🇶🇦' },
    { country_name: 'Romania', country_emoji: '🇷🇴' },
    { country_name: 'Russia', country_emoji: '🇷🇺' },
    { country_name: 'Rwanda', country_emoji: '🇷🇼' },
    { country_name: 'Saint Kitts and Nevis', country_emoji: '🇰🇳' },
    { country_name: 'Saint Lucia', country_emoji: '🇱🇨' },
     { country_name: 'Saint Vincent and the Grenadines', country_emoji: '🇻🇨' },
    { country_name: 'Samoa', country_emoji: '🇼🇸' },
    { country_name: 'San Marino', country_emoji: '🇸🇲' },
    { country_name: 'Sao Tome and Principe', country_emoji: '🇸🇹' },
    { country_name: 'Saudi Arabia', country_emoji: '🇸🇦' },
    { country_name: 'Senegal', country_emoji: '🇸🇳' },
    { country_name: 'Serbia', country_emoji: '🇷🇸' },
    { country_name: 'Seychelles', country_emoji: '🇸🇨' },
    { country_name: 'Sierra Leone', country_emoji: '🇸🇱' },
    { country_name: 'Singapore', country_emoji: '🇸🇬' },
    { country_name: 'Slovakia', country_emoji: '🇸🇰' },
    { country_name: 'Slovenia', country_emoji: '🇸🇮' },
    { country_name: 'Solomon Islands', country_emoji: '🇸🇧' },
    { country_name: 'Somalia', country_emoji: '🇸🇴' },
    { country_name: 'South Africa', country_emoji: '🇿🇦' },
    { country_name: 'South Korea', country_emoji: '🇰🇷' },
    { country_name: 'South Sudan', country_emoji: '🇸🇸' },
    { country_name: 'Spain', country_emoji: '🇪🇸' },
    { country_name: 'Sri Lanka', country_emoji: '🇱🇰' },
    { country_name: 'Sudan', country_emoji: '🇸🇩' },
    { country_name: 'Suriname', country_emoji: '🇸🇷' },
    { country_name: 'Sweden', country_emoji: '🇸🇪' },
    { country_name: 'Switzerland', country_emoji: '🇨🇭' },
    { country_name: 'Syria', country_emoji: '🇸🇾' },
    { country_name: 'Taiwan', country_emoji: '🇹🇼' },
    { country_name: 'Tajikistan', country_emoji: '🇹🇯' },
    { country_name: 'Tanzania', country_emoji: '🇹🇿' },
    { country_name: 'Thailand', country_emoji: '🇹🇭' },
    { country_name: 'Togo', country_emoji: '🇹🇬' },
    { country_name: 'Tonga', country_emoji: '🇹🇴' },
    { country_name: 'Trinidad and Tobago', country_emoji: '🇹🇹' },
    { country_name: 'Tunisia', country_emoji: '🇹🇳' },
    { country_name: 'Turkey', country_emoji: '🇹🇷' },
    { country_name: 'Turkmenistan', country_emoji: '🇹🇲' },
    { country_name: 'Tuvalu', country_emoji: '🇹🇻' },
    { country_name: 'Uganda', country_emoji: '🇺🇬' },
    { country_name: 'Ukraine', country_emoji: '🇺🇦' },
    { country_name: 'United Arab Emirates', country_emoji: '🇦🇪' },
    { country_name: 'United Kingdom', country_emoji: '🇬🇧' },
    { country_name: 'United States', country_emoji: '🇺🇸' },
    { country_name: 'Uruguay', country_emoji: '🇺🇾' },
    { country_name: 'Uzbekistan', country_emoji: '🇺🇿' },
    { country_name: 'Vanuatu', country_emoji: '🇻🇺' },
    { country_name: 'Vatican City', country_emoji: '🇻🇦' },
    { country_name: 'Venezuela', country_emoji: '🇻🇪' },
    { country_name: 'Vietnam', country_emoji: '🇻🇳' },
    { country_name: 'Yemen', country_emoji: '🇾🇪' },
    { country_name: 'Zambia', country_emoji: '🇿🇲' },
    { country_name: 'Zimbabwe', country_emoji: '🇿🇼' }
];

const seedCountries = async () => {
    await Country.bulkCreate(countryData);
}

module.exports = seedCountries;