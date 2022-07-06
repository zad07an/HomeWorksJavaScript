// Տրված է թիվ,գրել ռեկուրսիվ ֆունկցիա,որը հաշվում է այդ թվի թվանշանների գումարը և վերադարձնում ստացված արդյունքը,եթե թիվը միանիշ է,վերադարձնել այդ թիվը։

function sumOfDigits(num){
  if (num < 10 && num > 1){
    return num;
  }
  return num % 10 + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(44));

