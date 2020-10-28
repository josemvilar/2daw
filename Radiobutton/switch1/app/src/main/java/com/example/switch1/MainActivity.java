package com.example.switch1;

import androidx.appcompat.app.AppCompatActivity;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.lifecycle.ViewModelProvider;

import android.app.assist.AssistStructure;
import android.os.Bundle;
import android.view.View;
import android.widget.Switch;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        final Switch suit =(Switch)findViewById(R.id.switch1);
        final ConstraintLayout todo =findViewById(R.id.todo);

        suit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

             if(suit.isChecked()){
                 todo.setBackgroundResource(R.drawable.jupiter);

             }else{
                 todo.setBackgroundResource(R.drawable.saturno);

             }
            }
        });


    }
}