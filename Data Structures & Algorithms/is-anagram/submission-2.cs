
public class Solution {

    public bool IsAnagram(string s, string t) 
    {

        if(s.Length != t.Length) return false;

        var occurs = new Dictionary<char,int>();

        for(var i = 0; i < s.Length; i++){
            if(occurs.ContainsKey(s[i])){
                occurs[s[i]] += 1;
            }
            else {
                occurs.Add(s[i], 1);
            }

            if(occurs.ContainsKey(t[i])){
                occurs[t[i]] -= 1;
                continue;
            }
            else {
                occurs.Add(t[i],-1);
            }
        }
        
        for (var i = 0; i < s.Length; i ++){
            System.Console.WriteLine(occurs[t[i]]);
            if(occurs[t[i]] != 0){
                return false;
            }
        }

        return true;
    }
}
