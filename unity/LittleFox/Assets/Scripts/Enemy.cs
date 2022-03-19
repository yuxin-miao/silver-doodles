using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : MonoBehaviour
{
  protected Animator anim;
  protected AudioSource deathAudio;
  // Start is called before the first frame update
  protected virtual void Start()
  {
    anim = GetComponent<Animator>();
    deathAudio = GetComponent<AudioSource>();
  }

  public void JumpOn()
  {
    deathAudio.Play();
    anim.SetTrigger("death");
  }
  public void Death()
  {
    Destroy(gameObject);

  }
}
