public class NumbersToLetters {
    public static String numbersToLetters(String input) {
        StringBuilder result = new StringBuilder();
        String[] words = input.split("\\+");

        for (String word : words) {
            String[] numbers = word.trim().split(" ");
            for (String number : numbers) {
                int num = Integer.parseInt(number);
                char letter = (char) ('A' + num - 1); // Convert number to corresponding letter
                result.append(letter);
            }
            result.append(" "); // Add a space between words
        }

        // Remove the trailing space and return the result
        return result.toString().trim();
    }

    public static void main(String[] args) {
        String input = "20 5 19 20+4 15 13 5";
        String output = numbersToLetters(input);
        System.out.println(output); // Should print "TEST DOME"
    }
}
