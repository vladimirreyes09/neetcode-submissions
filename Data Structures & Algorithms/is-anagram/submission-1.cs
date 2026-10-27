
public class Solution {

    public bool IsAnagram(string s, string t) 
    {

        if(s.Length != t.Length) return false;
        
        var occurs = new Dictionary<char,int>();

        foreach (var letter in s){
            if(occurs.ContainsKey(letter)){
                occurs[letter] += 1;
            }
            else {
                occurs.Add(letter, 1);
            }
        }


        foreach (var letter in t){
            if(occurs.ContainsKey(letter)){
                System.Console.WriteLine(letter);
                occurs[letter] -= 1;
                continue;
            }
            return false;
        }
        
        foreach (var letter in t){
            if(occurs[letter] != 0){
                return false;
            }
        }

        return true;
    }
}
