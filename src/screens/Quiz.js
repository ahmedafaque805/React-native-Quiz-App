import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const Quiz = ({navigation}) => {
  const [Quiz, setQuiz] = useState(null);
  const [Question, setQuestion] = useState(0);
  const [shuffle, setshuffle] = useState(null);
  const [Correct, setCorrect] = useState(null);
  const [Result, setResult] = useState(0);

  const QuizData = async () => {
    const url =
      'https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data?.results[0]);
    setQuiz(data.results);
  };

  useEffect(() => {
    QuizData();
  }, []);

  useEffect(() => {
    const random = Math.floor(
      Math.random() * Quiz?.[Question]?.incorrect_answers?.length,
    );
    const answer = Quiz?.[Question]?.correct_answer;
    let array = Quiz?.[Question]?.incorrect_answers;
    array?.splice(random, 0, answer);
    setshuffle({
      question: Quiz?.[Question]?.question,
      answer: answer,
      options: array,
    });
  }, [Quiz, Question]);

  const OptionSelect = (opt, index) => {
    if (Quiz?.length - 2 === Question) {
      navigation.navigate('Result', {Result});
    }
    if (opt === shuffle?.answer) {
      setCorrect(index);
      setTimeout(() => {
        setQuestion(Question + 1);
        setResult(Result + 1);
        setCorrect(null);
      }, 500);
    } else {
      setQuestion(Question + 1);
    }
  };

  return (
    <View style={styles.container}>
      {Quiz ? (
        shuffle && (
          <>
            <View>
              <Text style={[styles.text, styles.question]}>
                Q. {shuffle?.question}
              </Text>
            </View>
            <View style={styles.options}>
              {shuffle?.options?.map((opt, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => OptionSelect(opt, index)}>
                  <Text
                    style={[
                      styles.text,
                      styles.option,
                      Correct === index && styles.correct,
                    ]}>
                    {opt}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {Quiz?.length - 2 >= Question ? (
              <TouchableOpacity>
                <Text
                  style={[styles.button]}
                  onPress={() => setQuestion(Question + 1)}>
                  SKIP
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.navigate('Result', Result)}>
                <Text style={[styles.button]}>END</Text>
              </TouchableOpacity>
            )}
          </>
        )
      ) : (
        <View style={[styles.loader]}>
          <ActivityIndicator size={50} color="#5FA8D3" />
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 16,
  },
  text: {
    color: '#1B4965',
  },
  question: {
    marginVertical: 16,
    fontSize: 20,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    padding: 16,
    marginVertical: 12,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    fontSize: 16,
    width: '100%',
    backgroundColor: '#5FA8D3',
    padding: 8,
    paddingHorizontal: 20,
    textAlign: 'center',
    borderRadius: 8,
    color: 'white',
    fontWeight: '600',
    marginBottom: 20,
  },
  option: {
    padding: 12,
    fontSize: 14,
    width: '100%',
    backgroundColor: '#BEE9E8',
    marginVertical: 10,
    borderRadius: 10,
    color: '#1B4965',
  },
  correct: {
    backgroundColor: '#58D68D',
  },
  wrong: {
    backgroundColor: 'red',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
});
