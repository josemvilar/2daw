package com.example.forresult;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity2 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        Intent intent=getIntent();
        final String user= intent.getStringExtra("usuario");

        TextView tv=findViewById(R.id.textView3);
        tv.setText("Bien "+ user + ", selecciona tu casa");
        final Button button_SI = (Button) findViewById(R.id.button4);
        button_SI.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                volver(user);
            }
        });
        final Button button_NO = (Button) findViewById(R.id.button5);
        button_NO.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                volver2(user);
            }
        });
    }

    public void volver(String user) {
        Intent intent=new Intent();
        intent.putExtra("resultado",user);
        setResult(Activity.RESULT_OK,intent);
        finish();
    }
    public void volver2(String user) {
        Intent intent=new Intent();
        intent.putExtra("resultado",user);
        setResult(Activity.RESULT_CANCELED,intent);
        finish();
    }

}